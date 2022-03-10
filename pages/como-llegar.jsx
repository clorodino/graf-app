import Navbar from '../components/navbar'
import { HiChevronLeft } from 'react-icons/hi'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'

export default function comoLlegar() {
	return (
		<div className='max-w-md flex flex-col'>
			<div className='fixed top-0 w-full max-w-md z-10'><Navbar /></div>
			
			<main className='flex flex-col max-w-md relative top-20 pb-5 bg-white h-without-navbar'>
            	<div className='flex justify-center items-center pt-5 px-3 w-full'>
					<h1 className='text-2xl font-medium '>Cómo llegar</h1>
				</div>
				<Link href='/'>
						<a className='font-semibold text-sm my-0.5 absolute top-5'>
							<IoIosArrowBack className='text-3xl ml-2' />
						</a>
				</Link>
				<div className='mt-6 mx-5 mb-2'>
					<p className='font-semibold text-2xl'>Fábrica de Creació Fabra i Coats</p> 
					<p className='font-semibold text-lg'>C/ Sant Adrià, 20</p> 
				</div>
					<img src="https://res.cloudinary.com/dtgwzogvc/image/upload/v1646952515/graf/mapa_lu5oci.jpg" alt="mapa" />

			</main>
		</div>
	)
}
