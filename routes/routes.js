const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')


router.post('/training', controller.helloWorld)
router.get('/guys', controller.helloGuys)

module.exports = router;
