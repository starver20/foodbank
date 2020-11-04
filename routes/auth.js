const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignup);
// router.post('/login');
// router.post('/signup');
// router.post('/logout');

module.exports = router;