const Testimonial = require('../models/testimonials.js');
const { deleteFile } = require('../utils/fileUtils.js');

const createTest = async (req, res, newTestimonialData) => {
  try {
    console.log('Creating testimonial with data:', newTestimonialData);
    const newTestimonial = new Testimonial(newTestimonialData);
    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    console.log('Error creating testimonial:', error.message);
    res.status(400).json({ error: 'Error creating testimonial', details: error.message });
  }
};

const getTest = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching testimonials', details: error.message });
  }
};

const updateTest = async (req, res) => {
  const { id } = req.params;

  const updatedTestimonialData = {
    client: req.body.client,
    review: req.body.review,
    stars: req.body.stars,
  };

  if (req.file) {
    updatedTestimonialData.logo = [req.file.filename];
  }

  try {
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return res.status(404).json({error: 'Testimonial not found'});
    }

    if (req.file && testimonial.logo && testimonial.logo.length > 0) {
      testimonial.logo.forEach(deleteFile);
      console.log('Testimonial Logo edited');
    } else {
      console.error('Error Editing logo');
    }

    Object.assign(testimonial, updatedTestimonialData);
    const updatedTestimonial = await testimonial.save();
    res.status(200).json(updatedTestimonial);

  } catch (error) {
    res.status(400).json({ error: 'Error updating testimonial', details: error.message });
  }
};

const deleteTest = async (req, res) => {
  const { id } = req.params;
  const testimonials = await Testimonial.findById(id);
  try {
    await Testimonial.findByIdAndDelete(id);
    res.status(200).json({ message: 'Testimonial deleted' });
    console.log('Testimonial Deleted');

    if (testimonials.logo && testimonials.logo.length > 0) {
      testimonials.logo.forEach(deleteFile);
    }

  } catch (error) {
    res.status(400).json({ error: 'Error deleting testimonial', details: error.message });
  }

};

module.exports = {
  createTest,
  getTest,
  updateTest,
  deleteTest
};
