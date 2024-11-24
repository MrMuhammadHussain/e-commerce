"use client"
import { Banner, HeroImage } from '@/public'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const Hero = () => {

  const variants1 = {
    hidden: { x: 0, y: -5, opacity: 0 },
    visible: { x: 0, y: 10, opacity: 1, transition: { delay: 0.2 } },

  }
  const variants2 = {
    hidden: { x: 0, y: 40, opacity: 0.25 },
    visible: { x: 0, y: -10, opacity: 1, transition: { delay: 0.2 } },
  }
  return (
    <div className=' hero-section '>
      <div className='hero-container'>
        <div className='object-cover '>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants1}
          >
            <Image
              src={Banner}
              height="100"
              width="1400"
              alt='Banner'
            />
          </motion.div>
        </div>
        <div className='absolute md:mt-[300px] mt-[200px] ' >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants2}
          >
            <Image
              src={HeroImage}
              height="100"
              width="700"
              alt='Hero-Image'
            />
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Hero


