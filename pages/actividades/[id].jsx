import React from 'react'
import dbConnect from '../../lib/dbConnect'
import Activity from '../../models/Activities.model'
import Navbar from '../../components/navbar'
import Link from 'next/link'
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlineCalendar, HiChevronLeft } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import Image from 'next/image'

export default function Actividad({activity}) {

  const day = { weekday: 'long',  month: 'long', day: 'numeric',minimumIntegerDigits: 2 };
  const hour =`${(activity.date.getHours()-1).toLocaleString(undefined, {minimumIntegerDigits: 2})}:${activity.date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})} h`

  return (
    <div>
      
        <div className='fixed top-0 w-full max-w-md z-10'><Navbar /></div>
        <div className="max-w-md flex flex-col relative top-20 mb-8 bg-white h-without-navbar ">
          <Link href='/actividades'>
            <a className='font-semibold text-sm my-1 py-4 ml-2'>
              <IoIosArrowBack className='text-3xl' />
            </a>
            
          </Link>
         <img src={activity.imgUrl} alt={activity.title} />
        <div className="px-5 py-4">
            <div className="font-bold text-2xl mb-2">{activity.title}</div>
            <div className="font-semibold text-xl text-slate-500 mb-2">con {activity.guests}</div>
            <div className='flex justify-between pt-3'>
              <div className='flex items-start'>
                <HiOutlineCalendar className='color-icons mt-0.5'/>
                <p className="text-sm text-slate-400 font-medium mx-1">{activity.date.toLocaleDateString('es-ES')}</p>
              </div>
              <div className='flex items-start'>
                <HiOutlineClock className='color-icons mt-0.5'/>
                <p className="text-sm text-slate-400 font-medium mx-1">{hour}</p>
              </div>
              <div className='flex items-start'>
                <HiOutlineLocationMarker className='color-icons mt-0.5'/>
                <p className="text-sm text-slate-400 font-medium mx-1 w-28 self-start">{activity.location}</p>
              </div>
            </div>
            <hr className='my-5 border border-slate-300' />


            
            <p className="text-slate-700 text-base">{activity.description}</p>
            
        </div>
        {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            
        </div> */}
        </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
	try {
		await dbConnect()

        const activity = await Activity.findById(params.id).lean()
        activity._id = `${activity._id}`
		return { props: { success: true,  activity } }
	} catch (error) {
		console.log(error)
	}
}