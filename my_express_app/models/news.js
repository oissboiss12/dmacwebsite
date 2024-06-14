const mongoose = require('mongoose');

const NewsCollection = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    date: { type: Date, default: Date.now},
    link: [{ type: String}],
    images: [{ type: String }]
});

module.exports = mongoose.model('News', NewsCollection);