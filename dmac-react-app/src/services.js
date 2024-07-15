import React from "react";
import "./services.css";
import "./App.css";
import "./index.css";
import {Link} from 'react-router-dom';

const Services = () => {
    return(
      <div className="bg-black min-h-screen text-white">
        <div className="relative bg-cover bg-center h-64 flex items-center justify center" style={{backgroundImage: 'url(/dmac.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="title"> Services </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around flex-around mt-10">

          <div className="service-item">
            <img src="/dmac.jpg" alt="Service#1" className="service1 border-8 border-gray-900 mx-auto"/>
            <div className="text-box">
              <p className="text-content"> Learn more about our mission and what we do.</p>
              <Link to={"/spare-parts"} className="nav-button"> Spare Parts</Link>
            </div>
          </div>
          <div className="service-item">
            <img src="/dmac.jpg" alt="Service#2" className="service1 border-8 border-gray-900 mx-auto"/>
            <div className="text-box">
              <p className="text-content"> Discover our team and their expertise.</p>
              <Link to={"/service-repairs"} className="nav-button">Repairs</Link>
            </div>
          </div>
          <div className="service-item">
            <img src="/dmac.jpg" alt="Service#3" className="service1 border-8 border-gray-900 mx-auto"/>
            <div className="text-box">
              <p className="text-content"> Explore the company's vacancies and roles.</p>
              <Link to={"/service-fabrication"} className="nav-button">Fabrication</Link>
            </div>
          </div>
          <div className="service-item">
            <img src="/dmac.jpg" alt="Service#3" className="service1 border-8 border-gray-900 mx-auto"/>
            <div className="text-box">
              <p className="text-content"> Explore the company's vacancies and roles.</p>
              <Link to={"/service-psv"} className="nav-button">PSV</Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Services;