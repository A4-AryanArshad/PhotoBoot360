import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import '../Navbar.css'; 

function CustomBtn(props) {
  if (props.btnText !== null) {
    return (
      <a href="/services">
        <button className='w-fit flex gap-2 items-center px-1 py-1 font-display font-light sm:text-sm md:text-md text-white rounded-full border-2 uppercase bg-black hover:invert'>
          {props.btnText}
          <div className="w-7 h-7 flex items-center justify-center border-[2px] rounded-full sm:w-6 sm:h-6 md:w-7 md:h-7">
            <span className={`rotate-[45deg] ${props.btnText === '' && 'hidden sm:block'}`}>
              <FaArrowUpLong />
            </span>
          </div>
        </button>
      </a>
    );
  } else {
    return null;
  }
}

export default CustomBtn;