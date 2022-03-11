import React from 'react'
import Head from 'next/head'
import { Card, Text } from '@nextui-org/react'
import Image from 'next/image'
import logoHome from '../public/logo_graf.svg'
import Link from 'next/link'

export default function index() {
	const list = [
		{ title: 'Actividades' },
		{ title: 'Firmas' },
		{ title: 'Exposiciones' },
		{ title: 'Mini Graf' },
		{ title: 'Cómo llegar' },
		{ title: 'Talleres' },
	]
	return (
		<div className='max-w-md bg-rose-200'>
			<Head>
				<title>Graf</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex flex-col justify-center pt-10 pb-6'>
				<Image src={logoHome} alt='Logo Graf' width={60} height={60} />
			</div>
			<div className='px-3 h-home-card flex flex-col pb-2 pt-4 mx-1'>
				{list.map((item, index) => (
					
					<Link href={`/${item.title.toLowerCase().split(" ").join("-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} passHref key={index}>
						{/* <Card color='primary' bordered='false' clickable key={item.title} className='py-6 my-2 bg-white'>
							<Text className='text-center' css={{ fontWeight: '$bold', color: '$black' }} transform='capitalize'>
								{item.title} 
							</Text>
						</Card> */}
						<div key={item.title} className='bg-white text-xl font-bold rounded-lg mb-5 py-5 grow h-full flex justify-center items-center shadow-sm cursor-pointer'>
							{item.title}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
