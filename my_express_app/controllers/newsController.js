const News = require('../models/News');
const { deleteFile } = require('../utils/fileUtils');

const createNews = async (req, res) => {
  try {
    const newNewsData = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      date: req.body.date,
    };
    
    if (req.file) {
      newNewsData.images = [req.file.filename];
    }
    
    const newNews = new News(newNewsData);
    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (error) {
    res.status(400).json({ error: 'Error creating news', details: error.message });
  }
};

const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching news', details: error.message });
  }
};

const updateNews = async (req, res) => {
  const { id } = req.params;
  const updatedNewsData = {
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    date: req.body.date,
  };

  if (req.file) {
    updatedNewsData.images = [req.file.filename];
  }

  try {
    const newsItem = await News.findById(id);
    if (!newsItem) {
      return res.status(404).json({ error: 'News item not found' });
    }

    // Delete the old image if a new one is uploaded
    if (req.file && newsItem.images && newsItem.images.length > 0) {
      newsItem.images.forEach(deleteFile);
    }

    Object.assign(newsItem, updatedNewsData);
    const updatedNews = await newsItem.save();
    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(400).json({ error: 'Error updating news', details: error.message });
  }
};

const deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    const newsItem = await News.findById(id);
    if (!newsItem) {
      return res.status(404).json({ error: 'News item not found' });
    }

    // Delete the associated file
    if (newsItem.images && newsItem.images.length > 0) {
      newsItem.images.forEach(deleteFile);
    }

    await News.findByIdAndDelete(id);
    res.status(200).json({ message: 'News item deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting news', details: error.message });
  }
};

module.exports = {
  createNews,
  getNews,
  updateNews,
  deleteNews
};
