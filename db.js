const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

connectToMongo = ()=>{
    mongoose.connect( MONGO_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    } )
    .then((result) => {
        console.log("connected to database");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connectToMongo;