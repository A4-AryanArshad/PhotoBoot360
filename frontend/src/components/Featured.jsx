import React from 'react'
import Slides from './Slides'
import './Navbar.css'; 

class Content {
    constructor(title1, img1, title2, img2) {
      this.title1 = title1;
      this.img1 = img1;
      this.title2 = title2;
      this.img2 = img2;
    }
  }

  const slides1 = new Content("glow", "img/slides/01.jpg","circles", "img/slides/02.jpg")
  const slides2 = new Content("zoom", "img/slides/04.jpeg","morph", "img/slides/05.jpeg")

function Featured() {

    return (
        <div className='lg:py-20 md:py-10 sm:py-10 rounded-tl-3xl rounded-tr-3xl'>
            <div className='rt3 w-full lg:px-20 md:px-10 sm:px-5 border-b-[1px] border-zinc-700 lg:pb-20 md:pb-10 sm:pb-5 '>
            <h1 className=' rt2 font-condensed font-bold text-8xl uppercase'>Featured Projects</h1>
            </div>
            <Slides {...slides1} />
            <Slides {...slides2} />
        </div>
    )
}

export default Featured