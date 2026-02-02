console.log("FILE EXECUTED");

const express = require('express');
const dotenv = require('dotenv');
const errorhandler = require('./Middleware/errorhandler');
const mongoDb = require('./config/DBconnection')
dotenv.config();

const cors = require("cors");

mongoDb();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/contacts',require('./Routes/contactRoute'))
app.use('/api/user',require("./Routes/userRoute"));
app.use(errorhandler);

app.listen(port,()=>{
    console.log(`port is running at post ${port}`);
});



