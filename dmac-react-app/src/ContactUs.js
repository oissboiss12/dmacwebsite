import React, { useState } from "react";
import './ContactUs.css';
import axios from 'axios';
import './index.css';
import './App.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        comment: ''
    });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/send', formData)
      .then((response) => {
        alert('Message Sent Successfully');
      })
      .catch((error) => {
        console.error('There was an error sending the email!', error);
      });
  };
    return (
        <div className="min-h-screen bg-black text-white"> 
        {/* Title */}
        <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(/dmac.jpg)' }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                </div>
            </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto p-4">
            {/* Business Information */}
            <div className="bg-[#758D40] bg-opacity-75 p-8 shadow-lg mb-8 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                    <p>DMAC Truck and Trailer Ltd.</p>
                    <p>Ronan Valley Business Park, 60 Ballyronan Road</p>
                    <p>Magherafelt, United Kingdom, BT45 6EW</p>
                    <p>Phone: +44 7876 110256</p>
                    <p>Email: desi@dmactruckandtrailer.co.uk</p>
                </div>
                <div className="w-full md:w-1/2 p-4 text-right">
                    <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
                    <p>Monday - Thursday: 7am - 4pm</p>
                    <p>Friday: 7am - 1pm</p>
                    <p>Saturday - Sunday: Closed</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#758D40] bg-opacity-75 p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-black">
                        <input
                            className="border p-2 w-full"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            aria-label="First Name"
                            required
                        />
                        <input
                            className="border p-2 w-full"
                            type="text"
                            name="lastName"
                            placeholder="Surname"
                            value={formData.lastName}
                            onChange={handleChange}
                            aria-label="Surname"
                            required
                        />
                    </div>
                    <div className="mb-4 text-black">
                        <input
                            className="border p-2 w-full"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            aria-label="Email"
                            required
                        />
                    </div>
                    <div className="mb-4 text-black">
                        <input
                            className="border p-2 w-full"
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            aria-label="Phone Number"
                            required
                        />
                    </div>
                    <div className="mb-4 text-black">
                        <input
                            className="border p-2 w-full"
                            type="text"
                            name="company"
                            placeholder="Company (Optional)"
                            value={formData.company}
                            onChange={handleChange}
                            aria-label="Company (Optional)"
                        />
                    </div>
                    <div className="mb-4 text-black">
                        <textarea
                            className="border p-2 w-full"
                            rows="4"
                            name="comment"
                            placeholder="Comment"
                            value={formData.comment}
                            onChange={handleChange}
                            aria-label="Comment"
                            required
                        ></textarea>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 w-full md:w-auto">Submit</button>
                </form>
            </div>

            {/* Map Section */}
            <div className="bg-[#758D40] bg-opacity-75 p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Find Us</h2>
                <div className="h-64 w-full">
                    <iframe
                        className="w-full h-full border-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2302.9514562912095!2d-6.595823987279762!3d54.74565636899705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48605b000d3a7393%3A0xdc33468695f5e754!2sDMAC%20Truck%20and%20Trailer%20Repair%20Ltd.!5e0!3m2!1sen!2sus!4v1719325690808!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        title="Business Location"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ContactUs;