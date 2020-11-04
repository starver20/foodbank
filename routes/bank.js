const express = require('express');

const router = express.Router();

const bankController = require('../controllers/bank');

router.get('/',bankController.getIndex);
// router.get('/search/:city', bankController.getBanks);


module.exports = router;