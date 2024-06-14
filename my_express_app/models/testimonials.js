const mongoose = require('mongoose');

const TestimonialsCollection = new mongoose.Schema({
    client: { type: String, required: true},
    review: { type: String, required: true},
    stars: { type: Number, required: true},
    logo: [{ type: String}], //storing logo as an array due to it being an image
});

module.exports = mongoose.model('Testimonials', TestimonialsCollection);