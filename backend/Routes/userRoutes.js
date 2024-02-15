const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require('../Controller/userController');


router.post('/', userRegister);

router.post('/login', userLogin);

module.exports = router;