const express = require('express');
const multer = require('multer');
const path = require('path');
const { createTest, getTest, updateTest, deleteTest } = require('../controllers/testimonialsController');
const auth = require('../middleware/auth');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('logo');

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

router.post('/', auth, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log('Multer error:', err);
      return res.status(400).json({ message: err });
    }
    if (!req.file) {
      console.log('No file uploaded');
      return res.status(400).json({ message: 'No file uploaded' });
    }

    console.log('File uploaded:', req.file);

    const newTestimonialData = {
      client: req.body.client,
      review: req.body.review,
      stars: req.body.stars,
      logo: [req.file.filename] // Save the filename as an array
    };

    console.log('New testimonial data:', newTestimonialData);

    createTest(req, res, newTestimonialData);
  });
});

router.get('/', getTest);
router.put('/:id', auth, upload, (req, res) => {
  const updatedTestimonialData = {
    client: req.body.client,
    review: req.body.review,
    stars: req.body.stars,
    logo: req.file ? [req.file.filename] : undefined, // Save the filename as an array
  };

  updateTest(req, res, updatedTestimonialData);
});
router.delete('/:id', auth, deleteTest);

module.exports = router;
