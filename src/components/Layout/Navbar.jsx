import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      console.log(`[Navbar] scrollY = ${window.scrollY}, scrolled = ${isScrolled}`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    console.log(`[Navbar] Route changed to ${location.pathname}, menu closed`);
  }, [location]);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
    console.log(`[Navbar] Mobile menu toggled → ${!mobileOpen}`);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-main">NEWVISION</span>
          <span className="logo-sub"> FOOTBALL ACADEMY</span>
        </Link>
        <div className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>HOME</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>THE PROJECT</NavLink>
          <div className="dropdown">
            <span className="dropbtn">ACADEMY ▼</span>
            <div className="dropdown-content">
              <Link to="/programs#u7">U7 Full‑Time</Link>
              <Link to="/programs#u11">U11 Young Cup</Link>
              <Link to="/programs#u13">U13 junior Cup</Link>
               <Link to="/programs#u15">U15 senior Cup</Link>
              <Link to="/programs#id">ID Program</Link>
              <Link to="/programs#camps">Soccer Camps</Link>
              <Link to="/programs#gallery">Gallery</Link>
            </div>
          </div>
          <NavLink to="/apply" className={({ isActive }) => isActive ? 'active-link' : ''}>APPLY NOW</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>CONTACT</NavLink>
        </div>
        <button className="mobile-toggle" onClick={toggleMenu}>☰</button>
      </div>
    </nav>
  );
};

export default Navbar;