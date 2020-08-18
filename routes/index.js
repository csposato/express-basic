const { Router } = require('express');
const controller = require('../controllers');
const router = Router()

router.get('/users/:userId', controller.getUserProfile);
router.post('/token', controller.getToken);

module.exports = router;