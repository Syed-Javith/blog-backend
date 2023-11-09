const express = require('express');
const {
    user
} = require('../models/userModel');
const {
    blog
} = require('../models/blogsModel');

const router = express.Router();


router.post('/like/:userid/:blogid', async (req, res) => {

    await user.updateOne({
            _id: req.params.userid
        }, {
            $push: {
                liked: req.params.blogid
            }
        })
        .then(async (result) => {
            await blog.updateOne({
                    _id: req.params.userid
                }, {
                    $pull: {
                        liked: req.params.blogid
                    }
                })
                .then((result) => {
                    return result
                }).catch((err) => {
                    return err
                });
        }).catch((err) => {
            res.status(400).send(err)
        });

})

router.post('/dislike/:userid/:blogid', async (req, res) => {
    await user.updateOne({
            _id: req.params.userid
        }, {
            $pull: {
                liked: req.params.blogid
            }
        })
        .then(async (result) => {
            await blog.updateOne({
                    _id: req.params.blogid
                }, {
                    $pull: {
                        likedBy: req.params.userid
                    }
                })
                .then((result) => {
                    return result
                }).catch((err) => {
                    return err
                });
        }).catch((err) => {
            res.status(400).send(err)
        });


})

router.post('/comment/:userid/:blogid', async (rq, res) => {
    await blog.updateOne({
        _id : req.params.blogid
    }, {
        $push : {
            commentor : req.body.username ,
            commentorId : req.params.userid,
            content : req.body.content
        }
    })
})
// router.post('/')

module.exports = router;