const express = require('express');
const {
    blog
} = require('../models/blogsModel');


const router = express.Router();


router.get('/blog/', async (req, res) => {
    // console.log(req);
    await blog.find({})
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
})

router.post('/blog/:userid/:blogTitle', async (req, res) => {
    const newBlog = new blog({
        userid: req.params.userid,
        blogTitle: req.params.blogTitle,
        blogBody: req.body.blogBody
    })

    await newBlog.save()
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
})


router.patch('/blog/:userid/:blogTitle', async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const newBlogBody = req.body.blogBody;
    const newBlogTitle = req.body.blogTitle;


    await blog.updateOne({
            userid: req.params.userid,
            blogTitle: req.params.blogTitle
        }, {
            $set: {
                blogTitle: newBlogTitle,
                blogBody: newBlogBody
            }
        })
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

});

router.delete('/blog/:userid/:blogTitle', async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log("deleteee");

    await blog.deleteOne({
            userid: req.params.userid,
            blogTitle: req.params.blogTitle
        })
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

})

module.exports = router;