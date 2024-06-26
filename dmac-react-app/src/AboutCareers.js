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
        </div>

    );
}

export default AboutCareers;