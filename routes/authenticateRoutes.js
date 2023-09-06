const express = require('express'); 
const user = require('../models/userModel');

const router = express.Router();

router.post('/auth/login',(req,res)=>{
    const {username , password} = req.body;

    user.findOne({ username : username , password : password } )
    .then((result) => {
        const user = result;
        console.log(result);
        if(user === null ){
            console.log("not");
            res.status(401).send({ message : "user not found" })
        }else{
            console.log("logged");
            user.loggedIn = true;
            req.session.user = user;
            console.log(user);
            res.send(user);
        }
    }).catch((err) => {
        res.status(401).send(err);
    });
});

router.post('/auth/register',(req,res)=>{
    const {username , password} = req.body;

    const newUser = new user({
        username : username , 
        password : password
    });

    newUser.save()
    .then((result) => {
        const data = result.data;
        data.registered = true ;
        res.json(data);
    }).catch((err) => {
        res.status(401).send(err);
    });
});

router.post('/auth/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("trouble logging out");
        }
        res.send({message : "logged out successfully"});
    });
});


module.exports = router ;