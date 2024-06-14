const express = require('express');

const { createNews, getNews, getSingleNews, updateNews, deleteNews } = require('../controllers/newsController'); // Creating the variables for CRUD operations

const auth = require('../middleware/auth'); //Authentication is required to carry out specific tasks (i.e admins need to authenticate to post news)

const router = express.Router();

router.post('/', auth, createNews); // Creating operation
router.get('/', getNews); // Recieve operation
router.get('/:id', getSingleNews); // Recieve one operation
router.put('/:id', auth, updateNews); //Update operation
router.delete('/:id', auth, deleteNews); // Delete operation

module.exports = router;
