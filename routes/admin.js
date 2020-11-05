const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/donate', adminController.getDonate);
router.post('/donate', adminController.postDonate);
router.get('/volunteer', adminController.getVolunteer);
router.post('/volunteer', adminController.postVolunteer);

module.exports = router;
