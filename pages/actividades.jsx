import dbConnect from '../lib/dbConnect'
import Activity from '../models/Activities.model'
import { HiChevronLeft } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'
import Navbar from '../components/navbar';
import Image from 'next/image'



export default function Activities({ activities }) {
	const sortedActivities = activities.slice().sort((a, b) => a.date - b.date)

	return (
		<div className='max-w-md flex flex-col'>
			<div className='fixed top-0 w-full max-w-md z-10'><Navbar /></div>
			
			<main className='flex flex-col max-w-md relative top-20 pb-5 bg-white h-without-navbar'>
				<div className='flex justify-center items-center pt-5 px-3 w-full'>
					<h1 className='text-2xl font-medium '>Actividades</h1>
				</div>
				<Link href='/'>
						<a className='font-semibold text-sm my-0.5 absolute top-5'>
							<IoIosArrowBack className='text-3xl ml-2' />
						</a>
				</Link>

				{sortedActivities.map(({ _id, title, description, guests, imgUrlPort }) => (
					<Link href={`/actividades/${_id}`} passHref key={_id} >
						<div className='max-w-md rounded-lg overflow-hidden shadow-lg mt-4 mx-4' >
                            <div className='h-64 overflow-hidden'>
    							<img className='w-full object-contain' src={imgUrlPort} alt={`taller: ${title}`} />
                            </div>
							<div className='px-6 py-4 bg-white'>
								<div className='font-bold text-xl'>{title}</div>
								<div className='font-medium text-lg mb-1 text-slate-500'>con {guests}</div>
							</div>
						</div>
					</Link>
				))}
			</main>
		</div>
	)
}

export async function getServerSideProps() {
	try {
		await dbConnect()

		const res = await Activity.find({})
		const activities = res.map(el => {
			const activity = el.toObject()
			activity._id = `${activity._id}`
			return activity
		})
		return { props: { activities } }
	} catch (error) {
		console.log(error)
	}
}
