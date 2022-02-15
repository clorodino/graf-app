import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@nextui-org/react/button'
import dbConnect from '../lib/dbConnect'
import Activity from '../models/Activities.model'
import { StyledHelperTextContainer } from '@nextui-org/react'
import { FiChevronLeft } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '../components/Navbar'


export default function Activities({ activities }) {
	console.log(activities)

	return (
		<div>
			<Navbar />
			<main className='flex flex-col'>
				<div className='flex justify-start bg-white py-5 px-3'>
					<Link href='/'>
						<a className='font-semibold text-sm my-0.5'>
							<FiChevronLeft className='text-2xl mr-1' />
						</a>
					</Link>
					<h1 className='text-xl font-medium '>Actividades</h1>
				</div>

				{activities.map(({ _id, title, description, guests, imgUrl }) => (

						<Link href={`/${_id}`} passHref key={_id} >
							<div className='max-w-md rounded-lg overflow-hidden shadow-lg mt-4 mx-4' >
								<img className='w-full' src={imgUrl} alt='' />
								<div className='px-6 py-4 bg-white'>
									<div className='font-bold text-xl'>{title}</div>
									<div className='font-medium text-lg mb-1 text-slate-500'>{guests}</div>
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
