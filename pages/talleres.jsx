import dbConnect from '../lib/dbConnect'
import Workshop from '../models/Workshops.model'
import { HiChevronLeft } from "react-icons/hi";
import Link from 'next/link'
import Navbar from '../components/Navbar'



export default function Workshops({ workshops }) {
	const sortedWorkshops = workshops.slice().sort((a, b) => a.date - b.date)

	return (
		<div className='max-w-md flex flex-col'>
			<div className='fixed top-0 w-full max-w-md z-10'><Navbar /></div>
			
			<main className='flex flex-col max-w-md relative top-20 pb-5 bg-white h-without-navbar'>
            <div className='flex justify-start pt-5 px-3'>
					<Link href='/'>
						<a className='font-semibold text-sm my-0.5'>
							<HiChevronLeft className='text-2xl mr-1' />
						</a>
					</Link>
					<h1 className='text-xl font-medium '>Talleres</h1>
				</div>

				{sortedWorkshops.map(({ _id, title, description, teacher, imgUrl }) => (
					<Link href={`/talleres/${_id}`} passHref key={_id} >
						<div className='max-w-md rounded-lg overflow-hidden shadow-lg mt-4 mx-4' >
                            <div className='h-64 overflow-hidden'>
    							<img className='w-full object-contain' src={imgUrl} alt={`taller: ${title}`} />
                            </div>
							<div className='px-6 py-4 bg-white'>
								<div className='font-bold text-xl'>{title}</div>
								<div className='font-medium text-lg mb-1 text-slate-500'>con {teacher}</div>
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

		const res = await Workshop.find({})
		const workshops = res.map(el => {
			const workshop = el.toObject()
			workshop._id = `${workshop._id}`
			return workshop
		})
		return { props: { workshops } }
	} catch (error) {
		console.log(error)
	}
}
