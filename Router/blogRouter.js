const express = require('express');
const { postBlog ,getBlog } = require('../Controllers/blogs');

const router = express.Router();

router.post('/postBlog', postBlog);
router.get('/getBlog', getBlog);

module.exports = router;