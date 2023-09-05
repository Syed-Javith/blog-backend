const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    userid : String ,
    blogTitle : String ,
    blogBody : String
});

const blog = new mongoose.model("blog",blogSchema);

module.exports = blog