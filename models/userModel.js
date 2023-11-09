const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String ,
    password : String ,
    liked : [
        {
            type :String
        }
    ],
});

const user = new mongoose.model('user',userSchema);

module.exports = { user , userSchema };