import React from "react";
import "./fabrication.css";
import "./App.css";
import "./index.css";
import {Link} from 'react-router-dom';

const Fabrication = () => {
    return (
        <div className="min-h-screen bg-black text-white"> 
            {/* Title */}
            <div className="relative bg-cover bg-center h-64 flex items-center justify center" style={{backgroundImage: 'url(/dmac.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="title"> Fabrication </h1>
                    </div>

                </div>
            </div>
            {/* Content */}
            <div className="p-8 bg-[#758D40] bg-opacity-75 py-4">
                <h2 className="title-size"> Steel and Aluminium Fabrication </h2>
                <div className="bg-[#758D40] bg-opacity-50">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="w-full md:w-1/2 text-size custom-margin mt-4">
                    We hire skilled fabricators to assemble strutural steel and aluminium to commercial trailers. 
                    Contact us to make use of our fabrication services.
                    </p>
                    <img className="w-full md:w-1/2 max-w-md border-4 mt-4 border-bg border-opacity-50" alt="Team" src="workers/worker1.jpg"/>
                    
                    </div>
                    <Link to="/contact-us" className="nav-link custom-button">Contact Us </Link>
                    </div>
                </div>

        </div>

    );
}

export default Fabrication;