const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/addUser', controller.addUser);
router.put('/updateUser', controller.updateUser);
router.delete('/deletUser', controller.deletUser);

module.exports = router;