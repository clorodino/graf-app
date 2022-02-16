import React from 'react'
import dbConnect from '../../lib/dbConnect'
import Activity from '../../models/Activities.model'
import Navbar from '../../components/Navbar'
import Link from 'next/link'

export default function Actividad({activity}) {
  return (
    <div>
        <div className='fixed top-0 w-full max-w-md z-10'><Navbar /></div>
        <div className="max-w-md overflow-hidden flex flex-col relative top-20 mb-8 bg-white min-h-screen ">
         <img src={activity.imgUrl} alt={activity.title} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{activity.title}</div>
            <div className="font-bold text-xl mb-2">{activity.guests}</div>
            <p className="text-gray-700 font-semibold">{activity.location}</p>
            <p className="text-gray-700 text-base">{activity.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            
        </div>
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