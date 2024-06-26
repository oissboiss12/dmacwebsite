import React from "react";
import './AboutTeam.css';
import './index.css';
import './App.css';


const AboutTeam = () => {
    return (
        <div className="min-h-screen bg-black text-white"> 
            {/* Title */}
            <div className="relative bg-cover bg-center h-64 flex items-center justify center" style={{backgroundImage: 'url(/dmac.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="title"> The Team</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 bg-[#758D40] bg-opacity-75">
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#758D40] bg-opacity-50">
                    <p className="w-full md:w-1/2 text-center text-size mt-4 text-lg">
                    Welcome to our Team page! At DMAC Truck and Trailer, we believe that our people are our greatest asset. Our dedicated team of professionals is committed to delivering exceptional service and quality in everything we do. Get to know the talented individuals who make up our team.
                    </p>
                    <img className="w-full md:w-1/2 max-w-md border-4 mt-4 border-bg border-opacity-50" alt="Team" src="workers/worker1.jpg"/>
                    </div>
                </div>
                {/* Content */}
            <div className="p-8">
                <h2 className="client-title text-center mb-4 w-full"> Our Specialist Team</h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <ul className="w-full md:w-1/2 list-disc text-size mt-4 text-lg">
                    <li className="mb-2"><strong>John Doe, Director</strong> </li>
                    John has over 20 years of experience in the truck and trailer industry. His visionary leadership has been instrumental in driving DMAC to new heights. He is passionate about innovation and customer satisfaction.
                    </ul>
                    <img className="w-full md:w-1/2 max-w-md border-4 mt-4 border-bg border-opacity-50" alt="Team#1" src="/dmac.jpg"/>
                    </div>
                </div>
                <div className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between ">
                <img className="w-full md:w-1/2 max-w-md border-4 mt-4 border-bg border-opacity-50" alt="Team#2" src="/dmac.jpg"/>
                    <ul className="w-full md:w-1/2 list-disc text-size mt-4 text-lg">
                    <li className="mb-2 ml-2"><strong>Jane Doe, Director</strong> </li>
                    Jane oversees all financial aspects of DMAC, ensuring the company's financial health and sustainability. With a background in corporate finance, she brings a wealth of knowledge and expertise to the company. 
                    </ul>
                    
                    </div>
                </div>
            </div>

    );
}

export default AboutTeam;