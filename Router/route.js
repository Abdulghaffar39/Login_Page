const express = require('express');
const authrization  = require('../Middleware/authentication');
const { signup, login, data } = require('../Controllers/userAuth')

let router = express.Router()


router.post('/signup', signup)
router.post('/login' , login)
router.get('/data', authrization, data)


module.exports = router;