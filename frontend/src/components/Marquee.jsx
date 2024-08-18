import { motion } from 'framer-motion'
import React from 'react'
import Intro from './Intro'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-500 flex uppercase overflow-hidden whitespace-nowrap'>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className='text-[20vw] leading-none font-["Founders_Grotesk_X_Condensed"] uppsercase pt-[4vw] pr-[2vw] font-medium'>
          We are 360 Photo Booth
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className='text-[20vw] leading-none font-["Founders_Grotesk_X_Condensed"] uppsercase pt-[4vw] pr-[2vw] font-medium'>
          We are 360 Photo Booth
        </motion.h1>
      </div>
      <Intro />
    </div>
  )
}

export default Marquee