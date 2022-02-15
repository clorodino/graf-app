import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Nav() {
     const [navbarOpen, setNavbarOpen] = useState(false)

     const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
     }

     return (
          <nav className='flex justify-end'>
               <Button onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</Button>
               <ul className={`${!navbarOpen ? "hidden" : "absolute"} flex flex-col bg-slate-300 mt-12 min-w-full z-auto`}>
                    <Link passHref href="/actividades"><li >Actividades</li></Link>
                    <Link passHref href="/talleres"><li >Talleres</li></Link>
                    <Link passHref href="/mapas"><li >Mapas</li></Link>
                    <Link passHref href="/firmas"><li >Firmas</li></Link>
                    <Link passHref href="/faq"><li >FAQ</li></Link>
                    
               </ul>
          </nav>
     )
}
