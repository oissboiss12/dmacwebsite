import React from "react";
import './AboutCompany.css';
import './index.css';
import './App.css';


const AboutCompany = () => {
    return (
        <div className="min-h-screen bg-black text-white"> 
            {/* Title */}
            <div className="relative bg-cover bg-center h-64 flex items-center justify center" style={{backgroundImage: 'url(/dmac.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="title"> The Company</h1>
                    </div>

                </div>
            </div>
            {/* Content */}
            <div className="p-8 bg-[#758D40] bg-opacity-75">
                <h2 className="client-title text-center mb-4 w-full"> Our Mission</h2>
                <div className="flex flex-col items-center md:flex-row bg-[#758D40] bg-opacity-50 justify-between space-x-4">
                    <p className="w-full md:w-1/2 text-size mt-4 text-lg">
                    At DMAC Truck and Trailer, we pride ourselves on being a leading specialist in the manufacturing, servicing, and repair of rigid body and specialist trailers. With a commitment to quality and reliability, we strive to keep your vehicles in top condition, minimizing downtime and maximizing efficiency for your business.
                    </p>
                    <img className="w-full md:w-1/2 border-4 mt-4 border-bg border-opacity-50" alt='MissionImg' src="/dmac.jpg"/>
                </div>
            </div>

            <div className="p-8 justify-between items-center bg-black space-y-4 md:space-x-4 mt-2">
            <h2 className="client-title text-center"> The Clients</h2>
            <div className="flex flex-wrap justify-center mt-16">
                <img className='w-full md:w-1/4 border-4  border-bg border-opacity-50 mb-4 md:mb-0 md:mr-4' alt='Client#1' src="/dmac.jpg"></img>
                <img className='w-full md:w-1/4 border-4  border-bg border-opacity-50 mb-4 md:mb-0 md:mr-4' alt='Client#2'src="/dmac.jpg"></img>
                <img className='w-full md:w-1/4 border-4  border-bg border-opacity-50 mb-4 md:mb-0 md:mr-4' alt='Client#3' src="/dmac.jpg"></img>
                <img className='w-full md:w-1/4 border-4  border-bg border-opacity-50' alt='Client#4' src="/dmac.jpg"></img>
            </div>

            </div>

            <div className="p-8 bg-[#758D40] bg-opacity-75">
                <h2 className="client-title text-center  mb-4 w-full choose-title"> Why Choose Us?</h2>
                <div className="flex flex-col items-center md:flex-row justify-between md:flex-row bg-[#758D40] bg-opacity-50 space-x-4">
                <img className="w-full md:w-1/2 border-4 mt-4 border-bg border-opacity-50" alt='ChooseImg' src="/dmac.jpg"/>
                <ul className="list-disc md:w-1/2 text-size list-inside text-lg w-full mt-4">
                    <li className="mb-2"><strong>Experienced Team:</strong> Our team of experts has years of experience in the industry, bringing a wealth of knowledge and skill to every project.</li>
                    <li className="mb-2"><strong>Quality Assurance:</strong> We use only the highest quality materials and parts, ensuring that every job is completed to the highest standards.</li>
                    <li className="mb-2"><strong>Customer Focus:</strong> We prioritize our clients' needs and work tirelessly to ensure their satisfaction with our services.</li>
                </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;