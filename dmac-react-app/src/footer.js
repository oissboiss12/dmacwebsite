import React from "react";
import './footer.css';
import './index.css';

function Footer() {
    return (
        <footer className="App-footer border-2 border-gray-900  text-white py-10">
            <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex-1">
                <ul className="space-y-2">
                <h2 className="footer-title">Quick Links </h2>
                <li> <a href="/about">About Us</a></li>
                <li> <a href="/services">Services </a></li>
                <li> <a href="/contact-us">Contact Us </a></li>
                <li> <a href="/news">News </a></li>
                </ul>
            </div>
            <div className="flex-1 text-center">
            <ul className="space-y-2 flex-1">
                <h2 className="footer-title">DMAC Truck and Trailers Ltd. </h2>
                <p className="p-text">Ronan Valley Business Park, </p>
                <p className="p-text">60 Ballyronan Road</p>
                <p className="p-text">Magherafelt, United Kingdom, BT45 6EW</p>
                <li></li>
                <p className="p-text"> Phone: +44 7876 110256 </p>
            </ul>
            </div>
            </div>
            <div className="container mx-auto px-4 text-center mt-10">
                <div className="flex justify-center space-x-4">
                <a href="https://www.facebook.com/dmactruckandtrailer/" className="rounded-full bg-white text-[#758D40] p-3">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="mailto:info@dmactruckandtrailer.co.uk" className="rounded-full bg-white text-[#758D40] p-3">
                    <i className="fas fa-envelope"></i>
                </a>
                </div>
                <p className="mt-4">&copy; 2024 DMAC Truck and Trailers Ltd. All rights reserved.</p>   
            </div>    
        </footer>
    );
  };

  export default Footer;