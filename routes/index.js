const { Router } = require('express');
const controller = require('../controllers');
const router = Router()

router.get('/users/:userId', controller.getUserProfile);
router.post('/token', controller.getToken);

/*api.get('/users/:userId', (req, res) => {
    res.status(200).send(`user ${req.params.userId} page`)
})*/

module.exports = router;