import React from "react";
import './footer.css';
import './index.css';

function Footer() {
    return (
        <footer className="App-footer border-2 border-gray-900  text-white py-10">
            <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex-1">
                <ul className="space-y-2">
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </div>
            <div className="flex-1 text-center">
            <ul className="space-y-2">
                <li>Link 4</li>
                <li>Link 5</li>
                <li>Link 6</li>
            </ul>
            </div>
            </div>
            <div className="container mx-auto px-4 text-center mt-10">
                <div className="flex justify-center space-x-4">
                <a href="https://facebook.com" className="rounded-full bg-white text-[#758D40] p-3">FB</a>
                <a href="https://twitter.com" className="rounded-full bg-white text-[#758D40] p-3">TW</a>
                </div>
                <p className="mt-4">&copy; 2024 DMAC Truck and Trailers Ltd. All rights reserved.</p>   
            </div>    
        </footer>
    );
  };

  export default Footer;