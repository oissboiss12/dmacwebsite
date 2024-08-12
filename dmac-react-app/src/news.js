import './news.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import EditNewsModal from './editNews.js';
import {format, parseISO} from 'date-fns';

function handleDate(isoDateString) {
  const date = parseISO(isoDateString);
  return format(date, 'yyyy-MM-dd');
}


const News = () => {
  const [news, setNews] = useState([]);
  const [newNews, setNewNews] = useState({
    title: '',
    description: '',
    link: '',
    image: null,
    date: '',
  });

  const [selectedNews, setSelectedNews] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 3;

    
  const indexOfLastTestimonial = currentPage * newsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - newsPerPage;
  const currentNews = news.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  const totalPages = Math.ceil(news.length / newsPerPage);
  


  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  const addNews = () => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', newNews.title);
    formData.append('description', newNews.description);
    formData.append('link', newNews.link);
    formData.append('date', newNews.date);
    formData.append('image', newNews.image);

    axios
      .post('http://localhost:3001/api/v1.0/news', formData, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setNews([...news, response.data]);
        setNewNews({
          title: '',
          description: '',
          link: '',
          image: null,
          date: '',
        });
      })
      .catch((error) => {
        console.error('Error adding News:', error.response?.data || error.message);
      });
  };

  const handleFileChange = (e) => {
    setNewNews({ ...newNews, image: e.target.files[0] });
  };

  const deleteNews = (id) => {
    const token = localStorage.getItem('token');
    axios
      .delete(`http://localhost:3001/api/v1.0/news/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(() => {
        setNews(news.filter((newsItem) => newsItem._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting news:', error.response?.data || error.message);
      });
  };

  const openEditModal = (news) => {
    setSelectedNews(news);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedNews(null);
    setIsEditModalOpen(false);
  };

  const handleSave = (updatedNews) => {
    setNews(
      news.map((newsItem) =>
        newsItem._id === updatedNews._id ? updatedNews : newsItem
      )
    );
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1.0/news')
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching news:', error.response?.data || error.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Title */}
      <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(/dmac.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="title">News</h1>
          </div>
        </div>
      </div>

      <div className="p-8 text-white bg-[#758D40] bg-opacity-75">
        <div className="w-full">
          <Carousel
            showThumbs={false}
            showStatus={false}
            renderIndicator={null}
          >
            {news.length > 0 ? (
              currentNews.map((newsItem, index) => (
                <div key={index}>
                  {
                  newsItem.link ?
                    <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={newsItem.images && newsItem.images.length > 0 ? `http://localhost:3001/uploads/${newsItem.images[0]}` : ''}
                        alt={`Img ${index + 1}`}
                      />
                    </a>
                    :
                    <img
                      src={newsItem.images && newsItem.images.length > 0 ? `http://localhost:3001/uploads/${newsItem.images[0]}` : ''}
                      alt={`Img ${index + 1}`}
                    />
                  }
                  <p className="legend text-client-size">{newsItem.title}</p>
                  <p>{newsItem.description}</p>
                  <p>{handleDate(newsItem.date)}</p>
                  
                  {isAuthenticated() && (
                    <div>
                      <button
                        className="delete-bg border-2 border-black py-2 px-4 text-white custom-button"
                        onClick={() => deleteNews(newsItem._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="edit-bg border-2 border-black py-2 px-4 text-white custom-button"
                        onClick={() => openEditModal(newsItem)}
                      >
                        <FontAwesomeIcon icon={faEdit} /> Edit
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No News available</p>
            )}
          </Carousel>

          <div className="pagination-controls flex justify-center mt-4">
            {currentPage > 1 && (
              <button className="prev-button nav-link border-2 border-black py-2 px-4 text-black custom-button" onClick={handlePreviousPage}> Previous</button>
            )}
            {currentPage < totalPages && (
              <button className="prev-button nav-link border-2 border-black py-2 px-4 text-black custom-button" onClick={handleNextPage}> Next</button>
            )}
          </div>

          {isAuthenticated() && (
            <div className="mt-8 flex justify-center flex-col items-center">
              <h3 className="news-title">Add News</h3>
              <input
                type="text"
                name="title"
                className="text-black border-input border-color"
                placeholder="Title"
                value={newNews.title}
                onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
              />
              <textarea
                className="text-black border-input border-color mt-4"
                name="description"
                placeholder="Description"
                value={newNews.description}
                onChange={(e) => setNewNews({ ...newNews, description: e.target.value })}
              />
              <input
                type="url"
                name="link"
                className="text-black border-input border-color mt-4"
                placeholder="Link (Optional)"
                value={newNews.link}
                onChange={(e) => setNewNews({ ...newNews, link: e.target.value })}
              />
              <input
                type="date"
                name="date"
                className="text-black border-input border-color mt-4"
                placeholder="Date"
                value={newNews.date}
                onChange={(e) => setNewNews({ ...newNews, date: e.target.value })}
              />
              <input
                type="file"
                name="image"
                className="text-black border-input border-color bg-white mt-4"
                placeholder="Image"
                onChange={handleFileChange}
              />
              <button
                className="nav-link border-2 border-black py-2 px-4 text-black custom-button"
                onClick={addNews}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedNews && (
        <EditNewsModal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          news={selectedNews}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default News;
