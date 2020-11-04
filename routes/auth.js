const express = require('epress');

const router = express.Router();

router.get('/login');
router.get('/signup');
router.post('/login');
router.post('/signup');
router.post('/logout');

module.exports = router;