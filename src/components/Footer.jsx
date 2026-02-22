import { navLinks, socialMediaIcons } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-12 mt-16'>
      <div className=' max-w-6xl mx-auto px-6 grid md:grid-cols-[55%_45%] gap-8 md:gap-14 '>
        {/* column 1 */}
        <div className='space-y-3 w-2/3 '>
          <h2 className='font-bold text-xl '>Leema George</h2>
          <p>I am a Frontend Developer specializing in building responsive and high-performance web applications using React.js and modern technologies. I focus on writing clean, efficient code and continuously improving my skills to create better digital experiences.</p>
        </div>
        
        {/* column 2 */}
        <div className='flex items-center gap-10'>
               <div  className='flex flex-col gap-3 '>
          <h3 className='font-bold text-xl'>Quick Links</h3>
          {
            navLinks.map((link)=>(
              <Link key={link.name} href={link.href} >{link.name}</Link>
            ))
          }
        </div>
        
        {/* column 3 */}
        <div className='flex flex-col gap-3'>
          <h3 className='font-bold text-xl'>Connect Me</h3>
          {
            socialMediaIcons.map((item)=>(
              <Link key={item.name} href={item.url} target='_blank'>{item.name}</Link>
          ))
        }

        </div>
        </div>
   
      </div>
      <div className='text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6'>
        ©{new Date().getFullYear()} Leema George. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer