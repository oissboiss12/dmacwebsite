import React from "react";
import "./AboutUs.css";
import "./App.css";
import "./index.css";
import {Link} from 'react-router-dom';

const AboutUs = () => {
    return(
      <div className="bg-black min-h-screen text-white">
        <div className="relative bg-cover bg-center h-64 flex items-center justify center" style={{backgroundImage: 'url(/dmac.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="title"> About Us </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around flex-around mt-10">

          <div className="about-item">
            <img src="/dmac.jpg" alt="About#1" className="about1 border-8 border-gray-900 mx-auto"/>
            <div className="text-box">
              <p className="text-content"> Learn more about our mission and what we do.</p>
              <Link to={"/about-company"} className="nav-button">The Company</Link>
            </div>
          </div>
          <div className="about-item">
            <img src="/dmac.jpg" alt="About#2" className="about1 border-8 border-gray-900 mx-auto"/>
            <div className="text-box">
              <p className="text-content"> Discover our team and their expertise.</p>
              <Link to={"/about-team"} className="nav-button">The Team</Link>
            </div>
          </div>
          <div className="about-item">
            <img src="/dmac.jpg" alt="About#3" className="about1 border-8 border-gray-900 mx-auto"/>
            <div className="text-box">
              <p className="text-content"> Explore the company's vacancies and roles.</p>
              <Link to={"/about-careers"} className="nav-button">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutUs;