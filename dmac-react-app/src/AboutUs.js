import React from "react";
import "./AboutUs.css";
import "./App.css";
import "./index.css";

const AboutUs = () => {
    return(
    <div className="bg-black min-h-screen">
      <h1 className="page-header"> About Us</h1>

      <div className="flex justify-center space-x mt-40">

        <img src="/dmac.jpg" alt="About#1" className="about1 border-8 border-gray-900 mx-auto"/>
        <img src="/dmac.jpg" alt="About#2" className="about1 border-8 border-gray-900 mx-auto"/>
        <img src="/dmac.jpg" alt="About#3" className="about1 border-8 border-gray-900 mx-auto"/>
      </div>
    </div>
    );
}

export default AboutUs;