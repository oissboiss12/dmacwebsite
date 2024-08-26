import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './editTestimonials.css';

Modal.setAppElement('#root'); //Avoid accessibility issues

const EditTestimonialModal = ({ isOpen, onRequestClose, testimonial, onSave}) => {
    const [client, setClient] = useState(testimonial.client);
    const [review, setReview] = useState(testimonial.review);
    const [stars, setStars] = useState(testimonial.stars);
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        setClient(testimonial.client);
        setReview(testimonial.review);
        setStars(testimonial.stars);
    }, [testimonial]);

    // 
    const handleFileChange = (e) => {
        setLogo(e.target.files[0]);
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('client', client);
        formData.append('review', review);
        formData.append('stars', stars);
        if (logo) {
            formData.append('logo', logo);
        }

        try {
            const response = await axios.put(`http://localhost:3001/api/v1.0/testimonials/${testimonial._id}`, formData, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            onSave(response.data);
            onRequestClose();
        } catch (error) {
            console.error('Error updating Testimonial', error.response?.data || error.message);
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel='Edit Testimonial'>
            <div className='text-white flex flex-row md:flex-col bg-[#758D40]'>
                <form onSubmit={handleSubmit}>
                    <div className='icon-with-title'>
                        <h2 className='h2-size'>Edit Testimonial</h2>
                        <button onClick={onRequestClose}> 
                            <FontAwesomeIcon icon={faX} size='1x'/>
                        </button>
                    </div> 
                    <div className='input-container'>
                    <input
                        type='text'
                        className='text-black'
                        name='client'
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                        placeholder='Client'
                        required='true'/>
                    <textarea
                        type='text'
                        className='text-black'
                        name='review'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder='Review'
                        required='true'/>
                    <input
                        type='number'
                        className='text-black'
                        name='stars'
                        value={stars}
                        onChange={(e) => setStars(e.target.value)}
                        placeholder='Stars'
                        required='true'/>
                    <input
                        type='file'
                        className='text-black'
                        name='logo'
                        onChange={handleFileChange}/>
                    <button type='submit'> Save </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditTestimonialModal;