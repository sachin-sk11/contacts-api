const express = require("express");

const router = express.Router();
const validateHandler = require("../Middleware/validateHandler");
const {registerUser,loginUser,currentuser}=require('../Controllers/userController');

router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/current',validateHandler,currentuser);

module.exports = router;