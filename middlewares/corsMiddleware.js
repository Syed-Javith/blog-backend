const cors = require('cors');   

const corsMiddleware = cors({
    origin : ["http://localhost:3000","http://localhost:4200", 'http://localhost:19006', 'https://blog-frontend-deployed.netlify.app'],
    methods : ['GET' , 'POST' , 'PATCH' , 'DELETE'],
    credentials : true,
    allowedHeaders : ['Content-Type','Authorization']
})

module.exports = corsMiddleware;