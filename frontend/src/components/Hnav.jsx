import React, { useState } from 'react';

const Hnav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
  return (
    <nav className="navbar">
    <div className="container">
        <a href="/" className="logo">
            <img src="../img/logo/Final_lone_logo.svg" alt="Logo" />
        </a>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <ul>
                <li className="nav-item">
                    <a href="/services" className="nav-link" onClick={closeMenu}>Packages</a>
                </li>
                <li className="nav-item">
                    <a href="/signup" className="nav-link" onClick={closeMenu}>Get Started</a>
                </li>
                <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={closeMenu}>Admin</a>
                </li>
            </ul>
        </div>
        <div id="ss"className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </div>
</nav>
  )
}

export default Hnav