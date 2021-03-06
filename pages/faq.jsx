import dbConnect from '../lib/dbConnect'
import Faq from '../models/Faq.model'
import { HiChevronLeft } from 'react-icons/hi'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'
import Navbar from '../components/navbar'
import { Collapse, Text } from '@nextui-org/react';


export default function faq({ faqs }) {
    console.log(faqs)

	return (
		<div className='max-w-md flex flex-col'>
			<div className='fixed top-0 w-full max-w-md z-10'>
				<Navbar />
			</div>

			<main className='flex flex-col max-w-md relative top-20 pb-5 bg-white h-without-navbar'>
				<div className='flex justify-center items-center pt-5 px-3 w-full'>
					<h1 className='text-2xl font-medium '>FAQ</h1>
				</div>
				<Link href='/'>
						<a className='font-semibold text-sm my-0.5 absolute top-5'>
							<IoIosArrowBack className='text-3xl ml-2' />
						</a>
				</Link>
				<Collapse.Group>
				{faqs.map(faq => (
					<div key={faq._id} className='max-w-md overflow-hidden mt-4 mx-4 pb-2 flex flex-col border-b-2 border-slate-300'>
						{/* <div className='pb-2'>{faq.question}</div>
						<div>{faq.answer}</div> */}
						<Collapse className='font-medium text-xl' title={faq.question}>
						<Text>{faq.answer}</Text>
						</Collapse>
					</div>
				))}
				</Collapse.Group>
			</main>
		</div>
	)
}

export async function getServerSideProps() {
	try {
		await dbConnect()

		const res = await Faq.find({})
		console.log("res---->",res)
		const faqs = res.map(el => {
			const faq = el.toObject()
			faq._id = `${faq._id}`
			return faq
		})
		return { props: { faqs } }
	} catch (error) {
		console.log(error)
	}
}
