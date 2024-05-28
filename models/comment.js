var router = require('express').Router();
var { Comment } = require('../../models/index.js');

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } // Add a closing brace here
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;