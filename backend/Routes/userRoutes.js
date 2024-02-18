const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require('../Controller/userController');

// http://localhost:3000/api/user
router.post('/', userRegister);
// http://localhost:3000/api/user/login
router.post('/login', userLogin);

module.exports = router;