const router = require('express').Router()
const controller = require('../controllers/Users')
const middleware = require('../middleware')

router.get('/profile', controller.SeeOneUser)

module.exports = router