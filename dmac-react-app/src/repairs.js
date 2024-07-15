import React from "react";
import './repairs.css';
import './index.css';
import { Link } from 'react-router-dom';
import './App.css';


const Repairs = () => {
    return (
        <div className="min-h-screen bg-black text-white"> 
            {/* Title */}
            <div className="relative bg-cover bg-center h-64 flex items-center justify center" style={{backgroundImage: 'url(/dmac.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="title"> Repairs </h1>
                    </div>

                </div>
            </div>
            {/* Content */}
            <div className="p-8 bg-[#758D40] bg-opacity-75 py-4">
                <h2 className="title-size"> Commercial Vehicle Servicing </h2>
                <div className="bg-[#758D40] bg-opacity-50">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="w-full md:w-1/2 text-size custom-margin mt-4">
                    In DMAC Truck and Trailers Ltd. We pride ourselves in providing high quality repairs and maintenance to commercial vehicles. Contact us for more information
                    </p>
                    <img className="w-full md:w-1/2 max-w-md border-4 mt-4 border-bg border-opacity-50" alt="Team" src="workers/worker1.jpg"/>
                    
                    </div>
                    <Link to="/contact-us" className="nav-link custom-button">Contact Us </Link>
                    </div>
                </div>

                {/* Content */}
            <div className="p-8 bg-[#758D40] bg-opacity-75 mt-8">
                <h2 className="title-size"> 24-Hour Breakdown Service </h2>
                <div className="bg-[#758D40] bg-opacity-50">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="w-full md:w-1/2 text-size custom-margin mt-4">
                    We provide breakdown services for commercial vehicles. Contact us for more information.
                    </p>
                    <img className="w-full md:w-1/2 max-w-md border-4 mt-4 border-bg border-opacity-50" alt="Team" src="workers/worker1.jpg"/>
                    
                    </div>
                    <Link to="/contact-us" className="nav-link custom-button">Contact Us </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-[#758D40] bg-opacity-75 mt-8">
                <h2 className="title-size"> Hydraulic Pipe and Replacement </h2>
                <div className="bg-[#758D40] bg-opacity-50">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="w-full md:w-1/2 text-size custom-margin mt-4">
                    Our professional and experienced staff offer repair and replacement for hydraulic pipes in commercial vehicles. Contact us for more information.
                    </p>
                    <img className="w-full md:w-1/2 max-w-md border-4 mt-4 border-bg border-opacity-50" alt="Team" src="workers/worker1.jpg"/>
                    
                    </div>
                    <Link to="/contact-us" className="nav-link custom-button">Contact Us </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-[#758D40] bg-opacity-75 mt-8">
                <h2 className="title-size"> Chassis and Body Refurbishment </h2>
                <div className="bg-[#758D40] bg-opacity-50">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="w-full md:w-1/2 text-size custom-margin mt-4">
                    At DMAC Truck and Trailers, we specialise in trailer chassis and body refurbishment and restoration. Get in touch to get a quote today!
                    </p>
                    <img className="w-full md:w-1/2 max-w-md border-4 mt-4 border-bg border-opacity-50" alt="Team" src="workers/worker1.jpg"/>
                    
                    </div>
                    <Link to="/contact-us" className="nav-link custom-button">Contact Us </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-[#758D40] bg-opacity-75 mt-8">
                <h2 className="title-size"> Full Shotblasting and Painting Facilities </h2>
                <div className="bg-[#758D40] bg-opacity-50">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="w-full md:w-1/2 text-size custom-margin mt-4">
                    We offer shotblasting and painting services.
                    </p>
                    <img className="w-full md:w-1/2 max-w-md border-4 mt-4 border-bg border-opacity-50" alt="Team" src="workers/worker1.jpg"/>
                    
                    </div>
                    <Link to="/contact-us" className="nav-link custom-button">Contact Us </Link>
                    </div>
                </div>
        </div>

    );
}

export default Repairs;
