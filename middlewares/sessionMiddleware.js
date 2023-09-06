const expressSession = require('express-session')

const sessionMiddleware = expressSession({
    secret: 'your-secret-key', 
    resave: false,            
    saveUninitialized: true,   
    cookie: {
      secure: false,          
      maxAge: 3600000,        
    },
})

module.exports = sessionMiddleware;