const express = require('express');
const { auth, signup, login } = require('../Controllers/userAuth')
const { blog } = require('../Controllers/blogs')


let router = express.Router()


router.get('/', auth)
router.post('/signup', signup)
router.post('/login', login)
router.post('/blog', blog)


module.exports = router;