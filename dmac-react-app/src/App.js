import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import './index.css';
import './App.css';
import {Route, Routes} from 'react-router-dom';

function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/services" element={<Services />} /> */}
                <Route path="/about" element={<AboutUs/>} />
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </div>
    );
}

export default App;