const express = require('express');

const { createTest, getTest, updateTest, deleteTest } = require('../controllers/testimonialsController'); // Creating the variables for CRUD operations

const auth = require('../middleware/auth'); 

const router = express.Router();

router.post('/', auth, createTest); // Creating operation
router.get('/', getTest); // Recieve operation
router.put('/:id', auth, updateTest); //Update operation
router.delete('/:id', auth, deleteTest); // Delete operation

module.exports = router;