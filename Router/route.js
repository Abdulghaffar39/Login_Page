const express = require('express');
const { auth, signup, login, userDetails } = require('../Controllers/userAuth')


let router = express.Router()


router.get('/', auth)
router.post('/signup', signup)
router.post('/login', login)
router.get('/userDetails', userDetails)


module.exports = router;