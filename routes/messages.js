const express = require('express');
const router = express.Router();
const { getMessages, postMessages } = require('../controllers/messages');

router.get('/', getMessages);
router.post('/', postMessages);

module.exports = router;
