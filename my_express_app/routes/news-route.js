const express = require('express');
const multer = require('multer');
const path = require('path');
const { createNews, getNews, updateNews, deleteNews } = require('../controllers/newsController');
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
}).single('image');

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

    console.log('File uploaded:', req.file);

    const newNewsData = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
    };

    if (req.file) {
      newNewsData.images = [req.file.filename];
    }

    if (req.body.link) {
      newNewsData.link = req.body.link;
    }

    createNews(req, res, newNewsData);
  });
});

router.get('/', getNews);
router.put('/:id', auth, upload, updateNews);
router.delete('/:id', auth, deleteNews);

module.exports = router;
