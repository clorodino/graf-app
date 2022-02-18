import React from 'react'
import dbConnect from '../../lib/dbConnect'
import Workshop from '../../models/Workshops.model'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlineCalendar, HiChevronLeft } from "react-icons/hi";
import Image from 'next/image'

export default function Firma({firma}) {

  const day = { weekday: 'long',  month: 'long', day: 'numeric',minimumIntegerDigits: 2 };
  const hour =`${firma.date.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2})}:${firma.date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})} h`

  return (
    <div>
      
        <div className='fixed top-0 w-full max-w-md z-10'><Navbar /></div>
        <div className="max-w-md overflow-hidden flex flex-col relative top-20 mb-8 bg-white height-without-navbar ">
          <Link href='/talleres'>
            <a className='font-semibold text-sm my-0.5 p-3'>
              <HiChevronLeft className='text-2xl mr-1' />
            </a>
          </Link>
         <img src={taller.imgUrl} alt={taller.title} />
        <div className="px-5 py-4">
            <div className="font-bold text-2xl mb-2">{firma.title}</div>
            <div className="font-semibold text-xl text-slate-500 mb-2">con {firma.guests}</div>
            <div className='flex justify-between pt-3'>
              <div className='flex items-center'>
                <HiOutlineCalendar className='color-icons'/>
                <p className="text-sm text-slate-400 font-medium mx-1">{firma.date.toLocaleDateString('es-ES', day)}</p>
              </div>
              <div className='flex items-center'>
                <HiOutlineClock className='color-icons'/>
                <p className="text-sm text-slate-400 font-medium mx-1">{hour}</p>
              </div>
              <div className='flex items-center'>
                <HiOutlineLocationMarker className='color-icons'/>
                <p className="text-sm text-slate-400 font-medium mx-1">{firma.location}</p>
              </div>
            </div>
            <hr className='my-5 border border-slate-300' />


            
            <p className="text-slate-700 text-base">{firma.description}</p>
            
        </div>

        </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
	try {
		await dbConnect()

        const firma = await Signature.findById(params.id).lean()
        firma._id = `${firma._id}`
		return { props: { success: true,  taller } }
	} catch (error) {
		console.log(error)
	}
}