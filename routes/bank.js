const express = require('express');

const router = express.Router();

const bankController = require('../controllers/bank');
const isAuth = require('../middleware/is-Auth');

router.get('/',bankController.getIndex);
router.get('/bank', isAuth, bankController.getBank);


module.exports = router;