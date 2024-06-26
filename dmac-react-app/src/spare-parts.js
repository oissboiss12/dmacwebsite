import React from "react";
import './spare-parts.css';
import './index.css';
import './App.css';
import { Link } from "react-router-dom";

const SpareParts = () => {
    return (
        <div className="min-h-screen bg-black text-white"> 
            {/* Title */}
            <div className="relative bg-cover bg-center h-64 flex items-center justify center" style={{backgroundImage: 'url(/dmac.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="title"> Spare Parts</h1>
                    </div>

                </div>
            </div>

            <div className="p-8">
                <div className="flex flex-col items-center md:flex-row justify-between space-x-4">
                    <p className="text-center text-size">At DMAC Truck and Trailer, we understand the importance of keeping your vehicles in optimal condition with minimal downtime. Our comprehensive spare parts inventory ensures that you have access to the highest quality components, whenever you need them.</p>
                    <img className="w-full md:w-1/2 border-4 mt-4 border-bg border-opacity-50" alt='MissionImg' src="/dmac.jpg"/>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="w-1/4">
                        <h3 className="text-xl font-bold mb-4">Our Parts Inventory:</h3>
                        <ul className="text-list list-disc">
                            <li>Body Parts</li>
                            <li>Hydraulics</li>
                            <li>Braking</li>
                            <li>Lights</li>
                            <li>Electrical</li>
                            <li>Suspension</li>
                        </ul>
                    </div>
                </div>

                <div className="p-8 bg-[#758D40] bg-opacity-75 mt-10">
                    <div className="justify-center flex flex-col items-center space-x-4 bg-[#758D40] bg-opacity-50">
                    <h2 className="w-full md:w-1/2 text-center font-bold mt-4 text-lg"> Like to make an enquiry - Please Contact Us:</h2>
                    <nav className="md:flex justify-center space-x-4 mt-4">
                        <Link to="/contact-us" className="nav-link border-2 border-black">Contact</Link>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpareParts;