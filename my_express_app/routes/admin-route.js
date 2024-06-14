const express = require('express'); //Implementing express with node.js
const { login } = require('../controllers/adminController'); // The login page will require the controller javascript file
const { signout } = require('../controllers/adminController');
const router =  express.Router(); // initialise the router with express

const auth = require('../middleware/auth'); //Authentication is required to carry out specific tasks (i.e admins need to authenticate to post news)

router.post('/login', login );
router.post('/signout', auth, signout );

module.exports = router;
