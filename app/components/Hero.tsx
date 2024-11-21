import { Baner, HeroImage } from '@/public'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[450px] bg-slate-100 flex items-center '>
        <div className=' h-full md:max-w-[1024px] max-w-[600px] m-auto flex justify-center items-center'>
            <div className='object-cover '>
                <Image
                src={Baner}
                height="100"
                width="1400"
                alt='Baner'
                />
            </div>
            <div className='absolute mt-[300px] ' >
                <Image
                src={HeroImage}
                height="100"
                width="700"
                alt='Hero-Image'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero