'use client'
import Image from 'next/image'
import menu from "../assets/menu.svg"
import { useState } from 'react'
import { navLinks } from '@/data/data'

const Navbar = () => {
const [menuOpen,setMenuOpen] = useState(false)
    
  return (
    <div className='w-full hover:shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] cursor-pointer transition-shadow duration-100 '>
        <div className='container max-w-6xl mx-auto flex items-center justify-between py-4 '>
            {/* logo */}
            <h1 className='text-xl hover:text-red-800'>Leema<span className="text-red-800 hover:text-black">George</span></h1>
            {/* nav links */}
        <div className='hidden md:flex items-center gap-10'>
            {navLinks.map((link,index)=>(
                <div key={index}>
                    <a href={link.href} className='text-black/70 text-md font-bold uppercase hover:text-red-800'>{link.name}</a>
                </div>
            ))}
        </div>
        {/* mobile menu */}
        <div className=' md:hidden'>
            <button onClick={()=>setMenuOpen(!menuOpen)}><Image src={menu} alt='menu icon'/></button>
        </div>
        
         </div>
         
            {menuOpen && (
                <div className='block bg-[#e6dace] w-full text-center py-4 space-y-4 md:hidden'>
                    {navLinks.map((link,index)=>(
                        <div key={index}>
                            <a href={link.href} className='text-md uppercase font-bold text-blac/70 '>{link.name}</a>
                        </div>
                    ))}
                </div>
            )
         }
    </div>
  )
}

export default Navbar