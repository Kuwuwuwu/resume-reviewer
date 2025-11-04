const express = require('express');
const multer = require('multer');
const { analyzePDF } = require('../controllers/analyzeController');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), analyzePDF);

module.exports = router;