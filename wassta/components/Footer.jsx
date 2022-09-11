import React from 'react'
import Image from "next/image"

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-black py-4 px-12 gap-y-4 items-center'>
        <div className='flex justify-between items-center space-x-1 max-w-[40rem] md:max-w-[15rem]  md:mx-0 fo mx-auto'>
            <Image src="/image/ING.png"  width={40} height={40}/>
            <Image src="/image/in-removebg-preview.png"  width={40} height={40}/>
            <Image src="/image/FB-removebg-preview (1).png"  width={40} height={40}/>
            <Image src="/image/mail-removebg-preview.png"  width={40} height={40}/>
        </div>
        <p className='text-white hea text-lg w-full lg:text-right text-center'>
        Property of Pink Lemonade Marketing
        </p>
    </div>
  )
}

export default Footer