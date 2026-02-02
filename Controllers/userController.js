//@desc POST user
//@route GET /api/user
//@access private

const asyncHandler = require("express-async-handler");
const User= require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = asyncHandler(async (req,res)=>{
    const {user,email,password}=req.body;
    if(!user || !email || !password){
        res.status(400)
        throw new Error("all fields are mandatory");
    }

    const uniqueUser =  await User.findOne({email});
    if(uniqueUser){
        res.status(400)
        throw new Error("email is already taken ");
    }

    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword);
    const username = await User.create({
        user,
        email,
        password:hashedPassword
    })
    console.log(username);

    if(username){
        res.status(201).json({_id:username._id,name:username.user,email:username.email});
    }
    else{
        res.status(400)
        throw new Error("error fectching the details ");
    }
    //res.json({message:"register"});
}
)

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email ||!password){
        res.status(400)
        throw new Error("all fields are mandatory");
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const accesstoken =  jwt.sign(
            {
                user:{
                    username:user.user,
                    email:user.email,
                    id:user.id
                },
            },
            process.env.ACCESS_TOKEN_JWT,
            {
                expiresIn:"15m"
            }
        );
        res.status(201).json({accesstoken});
    }
    else{
        res.status(401)
        throw new Error("invalid email or password");
    }
    
})

const currentuser = asyncHandler( async (req,res)=>{
    res.json(req.user);
})


module.exports={registerUser,loginUser,currentuser}