// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer1.css'; // Import your custom CSS file

const Footer1 = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://www.facebook.com/profile.php?id=100089476092269&mibextid=LQQJ4d"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/orbsspincam?igsh=MjJvMG8ydTE3OHlt&utm_source=qr"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Packages</a></li>
            <li><a href="/signup">Get Started</a></li>
            <li><a href="/login">Admin</a></li>
           
          </ul>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer1;
