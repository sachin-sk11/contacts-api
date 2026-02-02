const mongoose = require("mongoose");

const mongoDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env["CONNECTION-STRING"]);
        console.log(`mongo db connected ${conn.Connection.host} , ${conn.Connection.name}`);
        console.log("MongoDB readyState:", mongoose.connection.readyState);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=mongoDb;








// const connectDB = async()=>{
//     try{
//         const conn = await mongoose.connect(process.env["CONNECTION-STRING"]);
//         console.log(`mongodb connected:${conn.connection.host}`);
//     }catch(error){
//         console.log(`error:${error.message}`);
//         process.exit(1);
//     }
// }
// module.exports=connectDB;