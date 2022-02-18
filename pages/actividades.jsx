import dbConnect from '../lib/dbConnect'
import Activity from '../models/Activities.model'
import { HiChevronLeft } from "react-icons/hi";
import Link from 'next/link'
import Navbar from '../components/Navbar'



export default function Activities({ activities }) {
	const sortedActivities = activities.slice().sort((a, b) => a.date - b.date)
	console.log(sortedActivities)

	return (
		<div className='max-w-md flex flex-col '>
			<div className='fixed top-0 w-full max-w-md z-10'><Navbar /></div>
			
			<main className='flex flex-col max-w-md relative top-20 pb-5 height-without-navbar'>
				<div className='flex justify-start pt-5 px-3'>
					<Link href='/'>
						<a className='font-semibold text-sm my-0.5'>
							<HiChevronLeft className='text-2xl mr-1' />
						</a>
					</Link>
					<h1 className='text-xl font-medium '>Actividades</h1>
				</div>

				{sortedActivities.map(({ _id, title, description, guests, imgUrl }) => (
					<Link href={`/actividades/${_id}`} passHref key={_id} >
						<div className='max-w-md rounded-lg overflow-hidden shadow-lg mt-4 mx-4' >
                            <div className='h-64 overflow-hidden'>
    							<img className='w-full object-contain' src={imgUrl} alt={`taller: ${title}`} />
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
