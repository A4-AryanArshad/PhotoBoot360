import React from 'react'
import Navbar from '../components/Navbar'
import Starter from '../components/Starter'
import Content from '../components/Content'
import VideoAnimation from '../components/VideoAnimation'
import Founder from '../components/Founder'
import Reviews from '../components/Reviews'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Footer1 from '../components/Footer1'
import Hnav from '../components/Hnav'

let msg = {
  title: "Founder's Message",
  text: "Welcome to Orbsspincam 360 Photo Booth! I’m Nana, the founder, excited to share our unique services designed to capture your cherished moments dynamically. Our 360 photo booths create immersive memories that you can relive from every angle. We’re passionate about turning ordinary moments into extraordinary memories with top-notch service and cutting-edge technology. From booking to final delivery, we strive to exceed your expectations. Thank you for considering us for your event!"
};

function Services() {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='text-white'>
      <Hnav/>
      <Starter text="Service"/>
      <VideoAnimation />
      <Content />
      <div className='w-full p-[10vh] bg-[#CDEA68] font-display rounded-tl-3xl rounded-tr-3xl border-b border-zinc-900 text-black'>
        <p className='text-[3vw] leading-[3.5vw] tracking-tight text-justify'>
          <b className='capitalize  underline hover:no-underline'> Let’s be honest. </b>There's no reason to have a dull event experience anymore. No one has time for uninspiring moments. Focus on what you do best — hosting an incredible event, while we do our best at capturing every angle with our 360 photo booth, making your memories unforgettable.
        </p>
      </div>
      <Founder {...msg} />
    
<Footer1/>
    </div>
  )
}

export default Services