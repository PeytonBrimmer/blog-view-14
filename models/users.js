const router = require('express').Router();
const { user } = require('../../models/index.js');

router.get('/', async (req, res) => {
    try {
        const userData = await user.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;