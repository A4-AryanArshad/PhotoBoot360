import React from 'react'
import HireMe from './HireMe'

import "./HireMe.css"

function Starter(props) {
  return (
    <>
    <div id="you2" className='w-full h-screen p-20 ft2'>
        <h1 className='font-condensed font-bold text-8xl uppercase py-20 border-b '>{props.text}</h1>
        <p id="you3" className='font-display font-light lg:text-5xl tracking-tight py-20 border-b'>Orb’s SpinCam offers a unique spin on photo booths, letting you create memories that last a lifetime. Our photo booth rentals allow people to connect and share their story with friends and family.</p>
      </div>

      <HireMe/>
      </>
  )
}

export default Starter