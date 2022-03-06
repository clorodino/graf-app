import dbConnect from '../lib/dbConnect'
import MiniGraf from '../models/MiniGrafs.model'
import { HiChevronLeft } from 'react-icons/hi'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'
import Navbar from '../components/navbar'
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi'
import Image from 'next/image'

export default function miniGraf({ miniGrafs }) {
	console.log(miniGrafs)
	const day = { weekday: 'long', month: 'long', day: 'numeric', minimumIntegerDigits: 2 }
	const sortedActivities = miniGrafs.slice().sort((a, b) => a.date - b.date)

	return (
		<div className='max-w-md flex flex-col'>
			<div className='fixed top-0 w-full max-w-md z-10'>
				<Navbar />
			</div>

			<main className='flex flex-col max-w-md relative top-20 pb-5 bg-white h-without-navbar'>
				<div className='flex justify-center items-center pt-5 px-3 w-full'>
					<h1 className='text-2xl font-medium '>Mini Graf</h1>
				</div>
				<Link href='/'>
						<a className='font-semibold text-sm my-0.5 absolute top-5'>
							<IoIosArrowBack className='text-3xl ml-2' />
						</a>
				</Link>
				<div className='flex justify-center max-w-md overflow-hidden mt-5 mx-4 pb-6 flex border-b-2 border-slate-300'>
					<Link passHref href={`mailto:`}>
                		<button className='bg-slate-300 py-2 px-6 rounded-full font-bold'>Inscribete aquí</button>
              		</Link>
				</div>

				{sortedActivities.map(miniGraf => (
					<div key={miniGraf._id} className='max-w-md overflow-hidden mt-5 mx-4 pb-2 flex border-b-2 border-slate-300'>
						
						<div>
							<img className='rounded-md w-28 object-cover' src={miniGraf.imgUrl} alt={`taller: ${miniGraf.title}`} />
						</div>
						<div className='px-6 pb-4'>
							<div className='font-bold text-xl'>{miniGraf.activity}</div>
							<div className='font-medium text-lg mb-1 text-slate-500'>con {miniGraf.author}</div>
							<div className='pt-1'>
								<div className='flex items-center'>
									<HiOutlineLocationMarker className='color-icons' />
									<p className='text-sm text-slate-400 font-medium mx-1'>{miniGraf.location}</p>
								</div>
								<div className='flex items-center'>
									<HiOutlineCalendar className='color-icons' />
									<p className='text-sm text-slate-400 font-medium mx-1'>{miniGraf.date.toLocaleDateString('es-ES')}</p>
								</div>
								<div className='flex items-center'>
									<HiOutlineClock className='color-icons' />
									<p className='text-sm text-slate-400 font-medium mx-1'>{`${miniGraf.date.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2})}:${miniGraf.date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})} h`}</p>
								</div>
							</div>
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

		const res = await MiniGraf.find({})
		const miniGrafs = res.map(el => {
			const miniGraf = el.toObject()
			miniGraf._id = `${miniGraf._id}`
			return miniGraf
		})
		return { props: { miniGrafs } }
	} catch (error) {
		console.log(error)
	}
}
