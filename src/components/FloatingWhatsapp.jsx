import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import whatsapp from "../assets/icon/whatsapp.svg"

const FloatingWhatsapp = () => {
  return (
    <div className='fixed bottom-5 right-3'>
        <Link href="https://wa.me/919633443047" target='_blank'>
        <Image src={whatsapp} alt='whatsapp' width={50} />
        </Link>
    </div>
  )
}

export default FloatingWhatsapp