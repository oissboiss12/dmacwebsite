const News = require('../models/news');

// Create
exports.createNews = async (req, res) => {
    const { title, description, link, images} = req.body; //define the fields as a constant
    try {
        const newNews = new News({ title, description, link, images}); //Constant for creating the fields from the model
        const savedNews = await newNews.save(); 
        res.status(201).json({message: 'News created successfully', id: savedNews._id}); //return status code 201 and convert to json
    } catch (error) {
        res.status(400).json({ error: 'Error creating news'}); // Return status code 400
    }
};

//Recieve
exports.getNews = async (req,res) => {
    try {
        const news = await News.find(); //Find the records on the database from the model
        res.json(news); //convert to json
    } catch (error) {
        res.status(400).json({ error: 'Error fetching news'}); //return status code 400
    }
};

//Recieve single
exports.getSingleNews = async (req,res) => {
    const { id } = req.params;
    try {
        const singleNews = await News.findById(id); //Find the record on the database from the model using the ID
        if (!singleNews) {
            console.log('News not found');
            return res.status(400).json( {error: "News not found"});
        }//If ID is not found - return status code 400
        res.json(singleNews); //convert to json
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(400).json({ error: 'Error fetching news'}); //return status code 400
    }
};

//Update
exports.updateNews = async (req,res) => {
    const { id } = req.params;
    const { title, description, link, images} = req.body;
    try {
        await News.findByIdAndUpdate(id, { title, description, link, images});
        res.status(200).json({ message: 'News updated successfully'});
    } catch (error) {
        res.status(400).json({ error: 'Error updating news'});
    }
};

//Delete
exports.deleteNews = async (req,res) => {
    const { id } = req.params;
    try {
        await News.findByIdAndDelete(id);
        res.status(200).json({ message: 'News deleted successfully'});
    } catch (error) {
        res.status(400).json({ error: 'Error deleting news'});
    }
};

