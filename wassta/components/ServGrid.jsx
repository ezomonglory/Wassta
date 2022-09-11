import React from 'react'
import Image from "next/image";


function ServGrid({image, text}) {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-y-4 '>
    <div className='w-full relative  h-[30vh] overflow-hidden'>
    <Image src={image} layout="fill" />
    </div>   
    <p className='text-center capitalize text-lg text-gray-400'> {text} </p>
</div>
  )
}

export default ServGrid