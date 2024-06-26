import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import AboutCompany from "./AboutCompany";
import AboutTeam from "./AboutTeam";
import AboutCareers from "./AboutCareers";
import Services from "./services";
import SpareParts from "./spare-parts";
import './index.css';
import './App.css';
import ContactUs from "./ContactUs";
import {Route, Routes} from 'react-router-dom';

function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/services" element={<Services />} /> */}
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/about-company" element={<AboutCompany/>} />
                <Route path="/about-team" element={<AboutTeam/>} />
                <Route path="/about-careers" element={<AboutCareers/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/spare-parts" element={<SpareParts/>} />
                <Route path="/contact-us" element={<ContactUs/>} />
            </Routes>
        </div>
    );
}

export default App;