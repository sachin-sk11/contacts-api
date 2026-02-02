const mangoose = require("mongoose");

const user = mangoose.Schema({
    user:{
        type:String,
        required:[true,"name is the compulsory"]
    },
    email:{
        type:String,
        required:[true,"email is the compulsory"],
        unique:[true,"email already taken"]
    },
    password:{
        type:String,
        required:[true,"password is the compulsory"]
    }
},{
    timestamps:true,
})

module.exports = mangoose.model("User",user);