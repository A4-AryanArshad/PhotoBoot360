import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar({ user }) {
  return (
    <div className='fixed z-[999] w-full px-[2vw] py-[2vh] font-display text-white flex justify-between align-center backdrop-blur-sm'>
      <div className="logo">
      <div class="colLg4 divNav1Web">
        <a href="index.html">

        <img src="img/logo/Final_lone_logo.svg" alt=""/>
        </a>
      </div>
      </div>
      <div className="links flex gap-10 justify-center items center">
        {[
          ['Packages', '/services'],
         
        ].map(([title, url]) => (
          <Link key={title} to={url} className="lg:text-lg md:text-md capitalize font-light">{title}</Link>
        ))}
                {user ? (
          <Link to="/userpanel"><p className="border p-2 rounded-xl">{user.firstName}</p></Link>
        ) : (
          <Link to="/signup" className="lg:text-lg md:text-md capitalize font-light">Get Started</Link>
        )}
           <Link to="/Login" className="lg:text-lg md:text-md capitalize font-light">Admin</Link>
      </div>
    </div>
  );
}

export default Navbar;