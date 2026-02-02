const { constants } = require("../constants");
const errorhandler = (err,req,res,next)=>{
    const statuscode = res.statusCode?res.statusCode:500;
    switch (statuscode) {
        case constants.BAD_REQUEST:
            res.status(statuscode).json({
                title:"Bad Request",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(statuscode).json({
                title:"Unauthorized",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.status(statuscode).json({
                title:"Not Found",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.status(statuscode).json({
                title:"Internal Server Error",  
                message:err.message,
                stackTrace:err.stack
            });
            break;
        default:
            console.log("no error handler defined for status code:", statuscode);
            break;
    }

    
}

module.exports=errorhandler;