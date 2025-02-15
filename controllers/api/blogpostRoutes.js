const router = require('express').Router();
const { includes } = require('lodash');
const { Blogpost, User, Comment } = require('../../models/index.js');
const withAuth = require('../../utils/auth.js');
const { title } = require('process');

router.get('/:id', async (req, res) => {
    const blogData = await Blogpost.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ['username'],
            },
            {
                model: Comment,
                attributes: ['comment_text', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },
        ],
    });
      
    const blogpost = await blogData.get({ plain: true});

    if {req.session.logged_in} {
        return res.render("blogpost", {
            logged_in: req.session.logged_in,
            blogpost: blogpost,
            user_id: req.session.user_id,
        });
    }
    else{
        return.res.redirect("/login");
    }
});

router.post('/:id', withAuth, async (req, res) => {
    try{
    const newComment = await Comment.create({
        comment: req.body.comment,
        user_id: req.session.user_id,
        blogpost_id: req.params.id,
    });

    return res.status(200).json(newComment);
} catch (err) {
    return res.status(400).json(err);
}});

router.delete('/:id', withAuth, async (req, res) => {
    try{
    const commentData = await Comment.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
    });

    if (!commentData) {
        return res.status(404).json({ message: 'No comment found with this id!' });
    }

    return res.status(200).json(commentData);
} catch (err) {
    return res.status(500).json(err);
}});

router.get('/:id/update', async (req, res) => {
    const blogData = await Blogpost.findByPk(req.params.id, {
      include: [{model: User}, {model: Comment, include: {model: User}}]
    });
    const blogpost = blogData.get({ plain: true });
    
    res.render("editPost", {
      blogpost: blogpost,
    });
  });


router.put('/:id', withAuth, async (req, res) => {
    const blogData = await Blogpost.update({
        title: req.body.title,
        content: req.body.content,
    },
    {
        where: {
            id: req.params.id,
        },
    });
    return res.status(200).json(blogData);
});

module.exports = router;
