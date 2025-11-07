const express = require('express');
const { signup, login, data } = require('../Controllers/userAuth')
const authrization  = require('../Middleware/authentication');

let router = express.Router()


router.post('/signup', signup)
router.post('/login', authrization , login)
router.get('/data', data)


module.exports = router;