"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay'
import ToggleButton from './ToggleButton'

const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={`fixed mx-auto border border-tertiary-600 left-0 right-0 top-0 z-50 w-full bg-bgLogo ${
        navbarOpen ? 'bg-opacity-100' : 'bg-opacity-90' }`}>
       <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto md:px-6 py-2 md:py-3'>
        <Link href='/' className='text-2xl md:text-5xl font-semibold text-Twhite'>LOGO</Link>
        <div className='mobile-menu md:hidden'><ToggleButton /></div>
        <div className='mobile-menu block  md:hidden'>
            {!navbarOpen ? (
                <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-Twhite hover:border-Twhite"
                onClick={() => setNavbarOpen(!navbarOpen)}> <Bars3Icon className="h-5 w-5" /></button>
            ) : (
                <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-Twhite hover:border-Twhite"
                 onClick={() => setNavbarOpen(!navbarOpen)}> <XMarkIcon className="h-5 w-5" /></button>
            )}
            
        </div>
        <div className='menu hidden md:flex md:w-auto gap-4 id="navbar"  '>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center'>
                {navLinks.map((link, index) => (
                    <li key={index}><NavLink href={link.path} title={link.title}/></li>
                ))
                }
            </ul>
            <ToggleButton />
        </div>
        
       </div>
       {navbarOpen && <MenuOverlay link={navLinks}/>}
       </nav>
  )
}

export default Navbar