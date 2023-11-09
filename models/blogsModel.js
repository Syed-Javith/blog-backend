const { userSchema } = require('./userModel');

const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    userid : String ,
    blogTitle : String ,
    blogBody : String ,
    likedBy : [
        {
            type : String
        }
    ],
    comments : [{

        type : mongoose.Schema.ObjectId ,
        ref : 'comment'

    }]
});

const blog = new mongoose.model("blog",blogSchema);

module.exports = { blog , blogSchema }