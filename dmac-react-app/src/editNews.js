import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root'); // Add this to avoid accessibility issues

const EditNewsModal = ({ isOpen, onRequestClose, news, onSave }) => {
  const [title, setTitle] = useState(news.title);
  const [description, setDescription] = useState(news.description);
  const [link, setLink] = useState(news.link || '');
  const [date, setDate] = useState(news.date);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setTitle(news.title);
    setDescription(news.description);
    setLink(news.link || '');
    setDate(news.date);
  }, [news]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('link', link);
    formData.append('date', date);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.put(`http://localhost:3001/api/v1.0/news/${news._id}`, formData, {
        headers: {
          Authorization: `${token}`,
        },
      });
      onSave(response.data);
      onRequestClose();
    } catch (error) {
      console.error('Error updating News:', error.response?.data || error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit News">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Edit News</h2>
        <button onClick={onRequestClose} style={{ background: 'none', border: 'none' }}>
          <FontAwesomeIcon icon={faX} size="2x" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
         <input
          type="url"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Link"
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default EditNewsModal;
