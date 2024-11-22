import { Banner, HeroImage } from '@/public'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[450px] flex items-center '>
        <div className=' h-full md:max-w-[1024px] max-w-[600px] m-auto flex justify-center items-center'>
            <div className='object-cover '>
                <Image
                src={Banner}
                height="100"
                width="1400"
                alt='Banner'
                />
            </div>
            <div className='absolute md:mt-[300px] mt-[200px] ' >
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