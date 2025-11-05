const express = require('express');
const { auth, signup, login } = require('../Controllers/userAuth')


let router = express.Router()


router.get('/', auth)
// router.get('/data', data)
router.post('/signup', signup)
router.post('/login', login)


module.exports = router;