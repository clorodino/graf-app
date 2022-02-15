import React from 'react'
import Link from 'next/link'
import { HiOutlineMenu } from "react-icons/hi"
import logoHome from '../public/logo_graf.svg'
import Image from 'next/image'


function navbar() {
  return (
    <nav className="container flex justify-between items-center px-4 py-2 mx-auto bg-slate-300">
        <div>
            <Link href='/' passHref>
                <Image src={logoHome} alt='Logo Graf' width={110} height={60} />
            </Link>
        </div>
        <div className="hidden space-x-8 lg:flex">
            <a href="#">Actividades</a>
            <a href="#">Mapa</a>
            <a href="#">Firmas</a>
            <a href="#">FAQ</a>
        </div>
        <div className="flex">
            <HiOutlineMenu size={25} />
        </div>
    </nav>
  )
}

export default navbar