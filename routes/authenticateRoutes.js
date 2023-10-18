const express = require('express'); 
const user = require('../models/userModel');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/auth/login',(req,res)=>{
    const {username , password} = req.body;

    console.log(username + " " + password);

    user.findOne({ username : username , password : password } )
    .then((result) => {
        console.log(result);
        if(result.password === password){
            console.log(password);
            const token = jwt.sign( {
                username : username,
                isAdmin :  result.isAdmin
            } , "MY_KEY" , {
                expiresIn : '1h'
            });

            res.status(200).send(
                {
                    token,
                     user : { 
                        username : username , 
                        isAdmin : result.isAdmin,
                        college : result.college
                    }
                }
            );
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

    user.findOne({ username : username , password : password } )
    .then((result) => {
        const user = result;
        if(user === null ){
            newUser.save()
            .then((result) => {
                result.isRegistered = true ;
                const data = result.data;
                res.send(data);
            }).catch((err) => {
                console.log(err);
                res.status(401).send(err);
            });
        }else{
            res.send({result , UserAlreadyFound : true});
        }
    }).catch((err) => {
        res.status(401).send(err);
    });

   
});

router.post('/auth/logout',(req,res)=>{
    res.status(200).send({message : "logged out successfully"});
});


module.exports = router ;