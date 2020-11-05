const express = require('express');

const router = express.Router();

const bankController = require('../controllers/bank');
const isAuth = require('../middleware/is-Auth');

router.get('/',bankController.getIndex);
router.get('/bank', isAuth, bankController.getBank);
router.get('/donor', isAuth, bankController.getDonor);


module.exports = router;