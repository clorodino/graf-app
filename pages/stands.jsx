import dbConnect from '../lib/dbConnect'
import Stand from '../models/Stand.model'
import { HiChevronLeft } from 'react-icons/hi'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'
import Navbar from '../components/navbar'
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi'
import Image from 'next/image'

export default function Stands({ stands }) {
	const day = { weekday: 'long', month: 'long', day: 'numeric', minimumIntegerDigits: 2 }
	const sortedSignatures = stands.slice().sort((a, b) => a.date - b.date)

	return (
		<div className='max-w-md flex flex-col'>
			<div className='fixed top-0 w-full max-w-md z-10'>
				<Navbar />
			</div>

			<main className='flex flex-col max-w-md relative top-20 pb-5 bg-white h-without-navbar'>
				<div className='flex justify-center items-center pt-5 px-3 w-full'>
					<h1 className='text-2xl font-medium '>Stands</h1>
				</div>
				<Link href='/'>
						<a className='font-semibold text-sm my-0.5 absolute top-5'>
							<IoIosArrowBack className='text-3xl ml-2' />
						</a>
				</Link>

				{sortedSignatures.map(stand => (
					<div key={stand._id} className='max-w-md overflow-hidden mt-5 mx-4 pb-2 flex border-b-2 border-slate-300'>
						<div className='px-6 pb-4'>
							<div className='font-bold text-xl'>{stand.name}</div>
						</div>
						
							<hr className='my-3 border-b-2 border-slate-300' />
					</div>
				))}
			</main>
		</div>
	)
}

export async function getServerSideProps() {
	try {
		await dbConnect()

		const res = await Stand.find({})
		const stands = res.map(el => {
			const stand = el.toObject()
			stand._id = `${stand._id}`
			return stand
		})
		return { props: { stands } }
	} catch (error) {
		console.log(error)
	}
}
