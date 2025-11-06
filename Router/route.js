const express = require('express');
const { signup, login, data } = require('../Controllers/userAuth')


let router = express.Router()


router.post('/signup', signup)
router.post('/login', login)
router.get('/data', data)


module.exports = router;