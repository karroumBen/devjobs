const express = require('express');
const UserController = require('./controller');

const router = express.Router();
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/:user_id', UserController.getUserProfile);

module.exports = router;
