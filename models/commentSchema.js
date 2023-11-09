const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
    commentor : String ,
    commentorId : String ,
    content : String ,
})