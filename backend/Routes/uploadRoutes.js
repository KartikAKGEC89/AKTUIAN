const express = require('express')
const router = express.Router();
const { upload, getListFiles, download } = require('../Controller/fileController');

// http://localhost:3000/api/upload
router.post('/uploadfile', upload);

// http://localhost:3000/api/viewfiles
router.get('/viewfiles', getListFiles);

// http://localhost:3000/api/download/:name
router.get('/download/:name', download);

module.exports = router;