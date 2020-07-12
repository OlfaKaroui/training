const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.post('/add', itemController.addItem);
router.get('/getByTitle', itemController.getItemByTitle);

module.exports = router;
