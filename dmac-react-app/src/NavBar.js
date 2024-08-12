import React, {useState, useEffect } from "react";
import './NavBar.css';
import './index.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const handleLogoClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      navigate('/login/login')
      console.log('Token', token)
    } else {
      navigate('/')
    }
  }
  


  // Click outside the dropdown box to close it
  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
    {/* NavBar */}
    <div className="App-header border-2 border-gray-900 flex justify-between items-center px-4 py-2">
      <img className="dmac_Logo" src="/dmac.jpg" alt="DMAC logo" onClick={handleLogoClick}/>
      <button className="md:hidden text-white" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      
      <nav className="hidden md:flex space-x-4">
        <Link to="/" className="nav-link">Home</Link>
          <div className="relative group">
            <Link to="/about" className="nav-link">About <FontAwesomeIcon icon={faCaretDown} className="ml-1" /></Link>
            <div className="absolute hidden group-hover:block bg-[#758D40] bg-opacity-75 text-black py-2">
              <Link to="/about-company" className="dropdown-link block px-4 py-2">The Company</Link>
              <Link to="/about-team" className="dropdown-link block px-4 py-2">The Team</Link>
              <Link to="/about-careers" className="dropdown-link block px-4 py-2">Careers</Link>
            </div>
          </div>
          <div className="relative group">
            <Link to="/services" className="nav-link">Services <FontAwesomeIcon icon={faCaretDown} className="ml-1" /></Link>
            <div className="absolute hidden group-hover:block bg-[#758D40] bg-opacity-75 text-black py-2">
              <Link to="/spare-parts" className="dropdown-link block px-4 py-2">Spare Parts</Link>
              <Link to="/service-repairs" className="dropdown-link block px-4 py-2">Repairs </Link>
              <Link to="/service-fabrication" className="dropdown-link block px-4 py-2">Fabrication </Link>
              <Link to="/service-psv" className="dropdown-link block px-4 py-2">PSV</Link>
            </div>
          </div>
        <Link to="/contact-us" className="nav-link">Contact</Link>
        <Link to="/news" className="nav-link">News</Link>
      </nav>
    </div>


  {/* Sidebar  */}
  <div className={`fixed top-0 left-0 h-full w-64 bg-[#758D40] text-black transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
    <div className="flex flex-col p-4 mt-24">
      <Link to="/" className="nav-link py-2">Home</Link>
      <Link to="/about" className="nav-link py-2">About Us</Link>
      <Link to="/services" className="nav-link py-2">Services</Link>
      <Link to="/contact-us" className="nav-link py-2">Contact</Link>
      <Link to="/news" className="nav-link py-2">News</Link>
    </div>
  </div>

  {/* Overlay for closing sidebar when clicked outside */}
  {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>}
  </>
  );
};

  export default NavBar;