import React from 'react'
import "./HireMe.css"
import Navbar from './Navbar'
import Footer1 from './Footer1.jsx'

const HireMe = () => {


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
    <>

<div id="hireo" className="you4">
    <div id="hire">
    <div id="hire1">
        <div id="he1">
    <h2>💡SILVER</h2>
    <h2> 2 Hours</h2>
    <hr></hr>
    </div>
    <div id="options">
    <p>✅ Lighting Kit Custom Overlay</p>
    <p>✅ License Free Music</p>
    <p>✅ Trendy Props</p>
    <p>✅ Instant Video Sharing via</p>
    <p>Texts, Email QR Code</p>
    <p>and Airdrop</p>
    <p>✅ Unlimited Videos</p>
    </div>
</div>






<div id="hire1" className="you4">

<div id="he1">
    <h2>💡EXCUTIVE </h2>
    <h2> 3 Hours</h2>
    <hr></hr>
    </div>
   
    <div id="options">
    <p>✅ Silver Package Details</p>
    <p>✅ Runway Carpet</p>
    <p>✅ Sharing Station</p>
    <p>✅ Custom Music</p>
    <p>✅ Crowd Control</p>
    <p>✅ Stanchions</p>
    </div>


</div>




<div id="hire1" className='you4'>
<div id="he1">
    <h2>💡PRO </h2>
    <h2> 3 Hours +</h2>
    <hr></hr>
    </div>
    <div id="options">
    <p>✅ Gold Package Details</p>
    <p>✅ Time extension</p>
    <p>✅ Runway Carpet</p>
    <p>✅ Sharing Station</p>
    <p>✅ Custom Music</p>
    <p>✅ Crowd Control</p>
    <p>✅ Stanchions</p>
    </div>


</div>

    </div>

  
</div>
    </>

  )
}

export default HireMe
