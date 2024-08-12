import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import AboutCompany from "./AboutCompany";
import AboutTeam from "./AboutTeam";
import AboutCareers from "./AboutCareers";
import Services from "./services";
import SpareParts from "./spare-parts";
import Login from "./Login";
import './index.css';
import './App.css';
import ContactUs from "./ContactUs";
import Repairs from "./repairs";
import {Route, Routes} from 'react-router-dom';
import Fabrication from "./fabrication";
import PSV from "./psv";
import News from "./news";


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
                <Route path="/login/login" element={<Login/>} />
                <Route path="/service-repairs" element={<Repairs/>} />
                <Route path="/service-fabrication" element={<Fabrication/>} />
                <Route path="/service-psv" element={<PSV/>} />
                <Route path="/news" element={<News/>} />
            </Routes>
        </div>
    );
}

export default App;