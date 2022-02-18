import React from 'react'
import dbConnect from '../../lib/dbConnect'
import Workshop from '../../models/Workshops.model'
import Navbar from '../../components/navbar'
import Link from 'next/link'
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlineCalendar, HiChevronLeft } from "react-icons/hi";
import Image from 'next/image'

export default function Taller({taller}) {

  const day = { weekday: 'long',  month: 'long', day: 'numeric',minimumIntegerDigits: 2 };
  const hour =`${taller.date.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2})}:${taller.date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})} h`

  return (
    <div>
      
        <div className='fixed top-0 w-full max-w-md z-10'><Navbar /></div>
        <div className="max-w-md overflow-hidden flex flex-col relative top-20 mb-8 bg-white h-without-navbar ">
          <Link href='/talleres'>
            <a className='font-semibold text-sm my-0.5 p-3'>
              <HiChevronLeft className='text-2xl mr-1' />
            </a>
          </Link>
         <img src={taller.imgUrl} alt={taller.title} />
        <div className="px-5 py-4">
            <div className="font-bold text-2xl mb-2">{taller.title}</div>
            <div className="font-semibold text-xl text-slate-500 mb-2">con {taller.teacher}</div>
            <div className='flex justify-between pt-3'>
              <div className='flex items-center'>
                <HiOutlineCalendar className='color-icons'/>
                <p className="text-sm text-slate-400 font-medium mx-1">{taller.date.toLocaleDateString('es-ES', day)}</p>
              </div>
              <div className='flex items-center'>
                <HiOutlineClock className='color-icons'/>
                <p className="text-sm text-slate-400 font-medium mx-1">{hour}</p>
              </div>
              <div className='flex items-center'>
                <HiOutlineLocationMarker className='color-icons'/>
                <p className="text-sm text-slate-400 font-medium mx-1">{taller.location}</p>
              </div>
            </div>
            <div className='pt-4 flex justify-between items-center'>
              {taller.price === 0 ? <div></div> :  <div className='text-lg font-bold text-slate-500'>Precio: {taller.price} €</div>}
             
              {!taller.full && <Link passHref href={`mailto:${taller.email}`}>
                <button className='bg-slate-300 py-2 px-6 rounded-full font-bold'>Inscribirme</button>
              </Link>}
              
            </div>
            <hr className='my-5 border border-slate-300' />


            
            <p className="text-slate-700 text-base">{taller.description}</p>
            
        </div>

        </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
	try {
		await dbConnect()

        const taller = await Workshop.findById(params.id).lean()
        taller._id = `${taller._id}`
		return { props: { success: true,  taller } }
	} catch (error) {
		console.log(error)
	}
}