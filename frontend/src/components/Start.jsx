import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Eyes from './Eyes'

function Start() {
    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center invert bg-[url("/img/logo/logo.svg")]'>
                <div className='invert'>
                    <Eyes />
                </div>
                <div className='absolute flex flex-col justify-center items-center gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] invert'>
                    <h1 className='text-[8vw] text-center uppercase font-["Founders_Grotesk_X_Condensed"] font-semibold'>Ready to start the project?</h1>
                    <Link to="/services" className='w-fit flex gap-5 items-center px-[1vh] py-[1vh] rounded-full border-2 uppercase bg-black hover:invert'>
                        Get Started
                        <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-100 rounded-full">
                            <span className='rotate-[45deg]'>
                                <FaArrowUpLong />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Start