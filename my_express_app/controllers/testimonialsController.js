const Testimonials = require('../models/testimonials');

//Create
exports.createTest = async (req, res) => {
    const { client, review, stars, logo } = req.body; //define fields as constant
    try {
        const newTest = new Testimonials({client, review, stars, logo });
        const savedTest = await newTest.save();
        res.status(201).json({ message: 'Testimonial Created Successfully', id: savedTest._id});
    } catch (error) {
        res.status(400).json({ error: 'Error creating testimonial'});
    }
};

//Recieve
exports.getTest = async (req, res) => {
    try {
        const test = await Testimonials.find();
        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching testimonial'});
    }
};

//Update
exports.updateTest = async (req, res) => {
    const { id } = req.params;
    const { client, review, stars, logo } = req.body;
    try {
        await Testimonials.findByIdAndUpdate(id, { client, review, stars, logo });
        res.status(200).json({message: 'Testimonial updated successfully'});
    } catch (error) {
        res.status(400).json({ error: 'Error updating testimonial'});
    }
};

//Update
exports.deleteTest = async (req, res) => {
    const { id } = req.params;
    try {
        await Testimonials.findByIdAndDelete(id);
        res.status(200).json({message: 'Testimonial deleted successfully'});
    } catch (error) {
        res.status(400).json({ error: 'Error deleting testimonial'});
    }
};