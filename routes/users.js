var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

// User creation
router.post('/create', userController.createUser);

// User sign in
router.post('/login', userController.doLogin); 

module.exports = router;




