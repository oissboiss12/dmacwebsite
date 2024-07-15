import './Home.css';
import Slideshow from './Slideshow';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import EditTestimonialModal from './editTestimonials';

const dotStyle = {
  backgroundColor: 'white',
  border: '2px solid #ccc',
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 10px',
  cursor: 'pointer',
  borderRadius: '50%',
};

const selectedDotStyle = {
  ...dotStyle,
  backgroundColor: '#fff',
  color: '#fff',
  border: '4px solid #000',
};

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    client: '',
    review: '',
    stars: 0,
    logo: null,
  });

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  const addTestimonial = () => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('client', newTestimonial.client);
    formData.append('review', newTestimonial.review);
    formData.append('stars', newTestimonial.stars);
    formData.append('logo', newTestimonial.logo);

    axios
      .post('http://localhost:3001/api/v1.0/testimonials', formData, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setTestimonials([...testimonials, response.data]);
        setNewTestimonial({
          client: '',
          review: '',
          stars: 0,
          logo: null,
        });
      })
      .catch((error) => {
        console.error('Error adding Testimonial:', error.response?.data || error.message);
      });
  };

  const handleFileChange = (e) => {
    setNewTestimonial({ ...newTestimonial, logo: e.target.files[0] });
  };

  const deleteTestimonial = (id) => {
    const token = localStorage.getItem('token');
    axios
      .delete(`http://localhost:3001/api/v1.0/testimonials/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(() => {
        setTestimonials(testimonials.filter((testimonial) => testimonial._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting testimonial:', error.response?.data || error.message);
      });
  };

  const openEditModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedTestimonial(null);
    setIsEditModalOpen(false);
  };

  const handleSave = (updatedTestimonial) => {
    setTestimonials(
      testimonials.map((testimonial) =>
      testimonial._id === updatedTestimonial._id ? updatedTestimonial : testimonial
      )
    );
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1.0/testimonials')
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error.response?.data || error.message);
      });
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
    ));
  };

  return (
    <div className="min-h-screen bg-black">
      <Slideshow />

      <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen p-4">
        <div className="flex flex-col md:flex-row bg-[#758D40] bg-opacity-75 p-4 shadow-md space-y-4 md:space-y-0 md:space-x-4 w-full max-w-4xl">
          <div className="flex flex-col w-full md:w-1/3 bg-[#758D40] bg-opacity-100 p-4">
            <h1 className="text mt-6 mb-2">About Us</h1>
            <h1 className="text2 mb-4">Get to Know Us Better</h1>
            <div className="flex justify-center">
              <Link to="/about" className="nav-link border-2 border-black py-2 px-4 text-black">
                About
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3 bg-[#758D40] bg-opacity-100 p-4">
            <p className="text1 mt-6 md:mt-10">
              Discover who we are and what drives us by visiting our About Us
              page. Learn more about our mission, vision, and the values that
              shape everything we do. See how we can make a difference together.
            </p>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/3 bg-gray-900 p-2 container-bg">
            <img src="/dmac.jpg" alt="DMAC Logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="p-8 text-white bg-[#758D40] bg-opacity-75">
        <h2 className="client-title text-center"> Testimonials </h2>
        <div className="w-full">
          <Carousel
            showThumbs={false}
            showStatus={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const style = isSelected ? selectedDotStyle : dotStyle;
              return (
                <li
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                >
                  {index + 1}
                </li>
              );
            }}
          >
            {testimonials.length > 0 ? (
              testimonials.map((testimonial, index) => (
                <div key={index}>
                  <img src={testimonial.logo && testimonial.logo.length > 0 ? `http://localhost:3001/uploads/${testimonial.logo[0]}` : ''} alt={`Img ${index + 1}`} />
                  <p className="legend text-client-size">{testimonial.client}</p>
                  <p>{testimonial.review}</p>
                  <div className="stars">{renderStars(testimonial.stars)}</div>
                  {isAuthenticated() && (
                  <div>
                    <button
                      className="delete-bg border-2 border-black py-2 px-4 text-white custom-button"
                      onClick={() => deleteTestimonial(testimonial._id)}>
                      Delete
                    </button>
                    <button
                    className='edit-bg border-2 border-black py-2 px-4 text-white custom-button'
                    onClick={() => openEditModal(testimonial)}> Edit</button>
                  </div>
                  )}
                </div>
              ))
            ) : (
              <p>No testimonials available</p>
            )}
          </Carousel>

          {isAuthenticated() && (
            <div className="mt-8 flex justify-center flex-col items-center">
              <h3 className="testimonial-title">Add Testimonial</h3>
              <input
                type="text"
                name="client"
                className="text-black border-input border-color"
                placeholder="Client"
                value={newTestimonial.client}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, client: e.target.value })
                }
              />
              <textarea
                className="text-black border-input border-color mt-4"
                name="review"
                placeholder="Review"
                value={newTestimonial.review}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, review: e.target.value })
                }
              />
              <input
                type="file"
                name="logo"
                className="text-black border-input border-color bg-white mt-4"
                placeholder="Logo"
                onChange={handleFileChange}
              />
              <input
                type="number"
                name="stars"
                className="text-black border-input border-color mt-4"
                placeholder="Stars"
                value={newTestimonial.stars}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, stars: e.target.value })
                }
              />
              <button
                className="nav-link border-2 border-black py-2 px-4 text-black custom-button"
                onClick={addTestimonial}
              >
                Submit
              </button>

              {selectedTestimonial && (
                <EditTestimonialModal
                  isOpen={isEditModalOpen}
                  onRequestClose={closeEditModal}
                  testimonial={selectedTestimonial}
                  onSave={handleSave}/>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
