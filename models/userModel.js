const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String ,
    password : String
});

const user = new mongoose.model('user',userSchema);

module.exports = user;