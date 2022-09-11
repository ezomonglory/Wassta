import React from 'react'
import Image from "next/image"

function Team({image, name, title, text}) {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-y-4 '>
        <div className='w-full relative  h-[40vh] rounded-2xl overflow-hidden'>
        <Image src={image} layout="fill" />
        </div>
        <h2 className='text-black font-bold text-2xl text-center'>{name}</h2>
        <h3 className='text-center text-gray-700 text-xl'> {title} </h3>
        <p className='italic text-gray-400'> {text} </p>
    </div>
  )
}

export default Team