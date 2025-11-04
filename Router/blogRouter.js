const express = require('express');
const { createBlog, getAllBlogs, updateBlog, deleteBlog } = require('../Controllers/blogs');

const router = express.Router();

// Blog CRUD Routes
router.post('/blog', createBlog);
router.get('/blog', getAllBlogs);
router.put('/blog/:id', updateBlog);
router.delete('/blog/:id', deleteBlog);

module.exports = router;