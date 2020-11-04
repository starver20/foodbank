const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/donate', adminController.getDonate);
router.post('/donate', adminController.postDonate);

module.exports = router;
