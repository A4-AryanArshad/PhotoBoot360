import React from 'react'
import Navbar from '../components/Navbar'
import Landingpage from '../components/Landingpage'
import Marquee from '../components/Marquee'
import Featured from '../components/Featured'
import Cards from '../components/Cards'
import Start from '../components/Start'
import Footer1 from '../components/Footer1.jsx'
import EyesContainer from '../components/EyesContainer'
import Video from '../components/Video.jsx'
import Hnav from '../components/Hnav.jsx'

function HomePage() {
  
  const storedUser = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let text = {
    title1: 'we create',
    title2: 'Magical 360°',
    title3: 'moments',
    url: 'img/asserts/eopening.jpg',
    subtitle: "San Antonio's 360 Photo Booth Rental.",
    description: 'we tell your story',
    btnText: 'Start the project',
    btnLink: '/project',
    scroll: -0.3
  };

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
     <Hnav/>
       <Landingpage {...text} />
      <Marquee />
      <EyesContainer />
      <Featured />
      <Start />
     <Video/>
      <Footer1 />
    </div>
  )
}

export default HomePage