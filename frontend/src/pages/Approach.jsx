import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Starter from '../components/Starter'
import CardContainer from '../components/CardContainer'
import Featured from '../components/Featured'
import Founder from '../components/Founder'
import Meet from '../components/Meet'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Approach() {
  
  const storedUser = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let msg = {
    title: 'Founder’s Message',
    text: "I’m Nana, the proud founder and owner of this innovative venture. I am thrilled to share our unique services with you, designed to capture your most cherished moments in a dynamic and immersive way.The journey of establishing this 360 photo booth company has been a labor of love, driven by my passion for photography, technology, and creating unforgettable experiences. I believe that every event, be it a wedding, corporate gathering, or a birthday celebration, deserves to be remembered in the most captivating way possible. That’s where our 360 photo booths come into play – they don’t just take pictures; they create memories that you can relive from every angle.Our mission is simple: to turn ordinary moments into extraordinary memories. We are committed to providing top-notch service, cutting-edge technology, and a seamless experience for you and your guests. From the initial booking to the final delivery of your photos and videos, we strive to exceed your expectations at every step .Thank you for considering us for your event. We look forward to being a part of your special moments and helping you capture them in a way that is as unique as you are."
  };

  return (
    <div className='text-white'>
      <Navbar user={storedUser} />
      <Starter text="Our Approach" />

      <Content />
   
      <Featured />
      <Founder {...msg} />
      <Cards />
      <Footer />
    </div>
  )
}

export default Approach