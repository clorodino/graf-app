import dbConnect from '../lib/dbConnect'
import Signature from '../models/Signatures.model'
import { HiChevronLeft } from 'react-icons/hi'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'
import Navbar from '../components/navbar'
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi'
import Image from 'next/image'

export default function Firmas({ firmas }) {
	const day = { weekday: 'long', month: 'long', day: 'numeric', minimumIntegerDigits: 2 }
	const sortedSignatures = firmas.slice().sort((a, b) => a.date - b.date)

	return (
		<div className='max-w-md flex flex-col'>
			<div className='fixed top-0 w-full max-w-md z-10'>
				<Navbar />
			</div>

			<main className='flex flex-col max-w-md relative top-20 pb-5 bg-white h-without-navbar'>
				<div className='flex justify-center items-center pt-5 px-3 w-full'>
					<h1 className='text-2xl font-medium '>Firmas</h1>
				</div>
				<Link href='/'>
						<a className='font-semibold text-sm my-0.5 absolute top-5'>
							<IoIosArrowBack className='text-3xl ml-2' />
						</a>
				</Link>

				{sortedSignatures.map(firma => (
					<div key={firma._id} className='max-w-md overflow-hidden mt-5 mx-4 pb-2 flex border-b-2 border-slate-300'>
						<div>
							<img className='rounded-md w-24 h-24 object-cover' src={firma.imgUrl} alt={`taller: ${firma.title}`} />
						</div>
						<div className='px-6 pb-4'>
							<div className='font-bold text-xl'>{firma.author}</div>
							<div className='pt-1'>
								<div className='flex items-center'>
									<HiOutlineLocationMarker className='color-icons' />
									<p className='text-sm text-slate-400 font-medium mx-1'>{firma.stand}</p>
								</div>
								<div className='flex items-center'>
									<HiOutlineCalendar className='color-icons' />
									<p className='text-sm text-slate-400 font-medium mx-1'>{firma.date.toLocaleDateString('es-ES')}</p>
								</div>
								<div className='flex items-center'>
									<HiOutlineClock className='color-icons' />
									<p className='text-sm text-slate-400 font-medium mx-1'>{`${(firma.date.getHours()-1).toLocaleString(undefined, {minimumIntegerDigits: 2})}:${firma.date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})} h`}</p>
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

		const res = await Signature.find({})
		const firmas = res.map(el => {
			const firma = el.toObject()
			firma._id = `${firma._id}`
			return firma
		})
		return { props: { firmas } }
	} catch (error) {
		console.log(error)
	}
}
