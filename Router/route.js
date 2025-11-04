const express = require('express');
const { auth, signup, login, data } = require('../Controllers/userAuth')
const { blog } = require('../Controllers/blogs')


let router = express.Router()


router.get('/', auth)
router.get('/data', data)
router.post('/signup', signup)
router.post('/login', login)
router.post('/blog', blog)


module.exports = router;