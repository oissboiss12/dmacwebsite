import './Home.css';
import Slideshow from './Slideshow';
import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';


const Home = () => {
  return (
    <>
    <div className='bg-black'>
      <Slideshow/>
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen p-4">
        <div className="flex flex-col md:flex-row bg-green-900 p-4 shadow-md space-y-4 md:space-y-0 md:space-x-4 w-full max-w-4xl">
          
          <div className="flex flex-col w-full md:w-1/3 bg-green-700 p-4">
            <h1 className="text mt-6 mb-2">ABOUT US</h1>
            <h1 className="text2 mb-4">Get to Know Us Better</h1>
            <div className="flex justify-center">
              <Link to="/about" className="nav-link border-2 border-black py-2 px-4 bg-green-600 hover:bg-green-500 text-black">
                About
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col w-full md:w-1/3 bg-green-700 p-4 ">
            <p className="text1 mt-6 md:mt-20">
              Discover who we are and what drives us by visiting our About Us page. Learn more about our mission, vision, and the values that shape everything we do. See how we can make a difference together.
            </p>
          </div>
          
          <div className="flex items-center justify-center w-full md:w-1/3 bg-gray-900 p-2 container-bg">
            <img src="/dmac.jpg" alt="DMAC Logo" className="w-full h-full object-contain" />
          </div>
          
        </div>
      </div>
    
      

    <div className="p-8 flex flex-col md:flex-row items-center bg-[#758D40] bg-opacity-75 justify-center w-full min-h-screen p-4">
      <h2 className="client-title text-center"> The Clients</h2>
      <Carousel>
        <div>
          <img src="/dmac.jpg" alt="Image 1" />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img src="/dmac.jpg" alt="Image 2" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src="/dmac.jpg" alt="Image 3" />
          <p className="legend">Image 3</p>
        </div>
      </Carousel>
    </div>
  </div>
  </>
  );
}

export default Home;
