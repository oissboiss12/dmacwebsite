import React from "react";
import './AboutCareers.css';
import './index.css';
import './App.css';


const AboutCareers = () => {
    return (
        <div className="min-h-screen bg-black text-white"> 
            {/* Title */}
            <div className="relative bg-cover bg-center h-64 flex items-center justify center" style={{backgroundImage: 'url(/dmac.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="title"> Careers </h1>
                    </div>

                </div>
            </div>
            {/* Content */}
            <div className="p-8 bg-[#758D40] bg-opacity-75">
                <div className="flex flex-col items-center md:flex-row bg-[#758D40] bg-opacity-50 justify-between space-x-4">
                    <p className="w-full md:w-1/2 text-size mt-4 text-lg">
                    At DMAC Truck and Trailer, we pride ourselves on being a leading specialist in the manufacturing, servicing, and repair of rigid body and specialist trailers. With a commitment to quality and reliability, we strive to keep your vehicles in top condition, minimizing downtime and maximizing efficiency for your business.
                    </p>
                    <img className="w-full md:w-1/2 border-4 mt-4 border-bg border-opacity-50" alt='CareerImg#1' src="/dmac.jpg"/>
                </div>
            </div>
        </div>

    );
}

export default AboutCareers;