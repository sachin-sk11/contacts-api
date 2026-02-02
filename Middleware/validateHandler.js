const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req,res,next)=>{
    let token;
    let authHandler = req.headers.authorization || req.header.Authorization;

    if(!authHandler || !authHandler.startsWith("Bearer")){
        res.status(401)
        throw new Error("User not Authorized or access token missing");
    }
     token = authHandler.split(' ')[1];
     
     jwt.verify(token, process.env.ACCESS_TOKEN_JWT, (err,decoded)=>{
        if(err){
            res.status(401)
            throw new Error("user not authorized");
        }
        req.user = decoded.user;
        next();
     })
})

module.exports = validateToken;