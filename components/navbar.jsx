import React, { useState } from 'react'
import Link from 'next/link'
import { HiOutlineMenu } from 'react-icons/hi'
import logoHome from '../public/logo_graf.svg'
import Image from 'next/image'

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

     const handleToggle = () => {
          setNavbarOpen(!navbarOpen)
     }

     return (
          <nav >
          <div className="container flex justify-between items-center px-4 py-2 mx-auto bg-rose-200 max-w-md">
               <div>
                    <Link href="/" passHref>
                         <Image
                              src={logoHome}
                              alt="Logo Graf"
                              width={110}
                              height={60}
                         />
                    </Link>
               </div>
               <div onClick={handleToggle} className="flex">
                    <HiOutlineMenu size={25} />
               </div>
               {/* <Button onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</Button> */}
               </div>
               <div className={`${ !navbarOpen ? 'hidden' : 'absolute'} list-none flex flex-col items-center bg-rose-200 w-screen py-3 px-4 max-w-md inset-x-0`}>
                    <div className='flex flex-col justify-end w-max text-xl font-bold text-center'>
                         <Link passHref href="/actividades">
                              <a type='text' className='py-2 hover:-translate-y-1 hover:scale-110 hover:text-slate-800 duration-300'>Actividades</a>
                         </Link>
                         <Link passHref href="/firmas">
                              <a type='text' className='py-2 hover:-translate-y-1 hover:scale-110 hover:text-slate-800 duration-300'>Firmas</a>
                         </Link>
                         <Link passHref href="/exposiciones">
                              <a type='text' className='py-2 hover:-translate-y-1 hover:scale-110 hover:text-slate-800 duration-300'>Exposiciones</a>
                         </Link>
                         <Link passHref href="/mini-graf">
                              <a type='text' className='py-2 hover:-translate-y-1 hover:scale-110 hover:text-slate-800 duration-300'>Mini Graf</a>
                         </Link>
                         <Link passHref href="/talleres">
                              <a type='text' className='py-2 hover:-translate-y-1 hover:scale-110 hover:text-slate-800 duration-300'>Talleres</a>
                         </Link>
                         <Link passHref href="/como-llegar">
                              <a type='text' className='py-2 hover:-translate-y-1 hover:scale-110 hover:text-slate-800 duration-300'>¿Cómo llegar?</a>
                         </Link>
                    </div>
               </div>
          </nav>
     )
}