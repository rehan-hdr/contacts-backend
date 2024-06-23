const {constants} = require("../constants");
const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
             res.json({title: "VALIDATION FAILED", 
                       message : err.message,
                       stackTrace: err.stack});
            break;
        case constants.UNAUTHORISED:
            res.json({title: "UNAUTHORISED", 
            message : err.message,
            stackTrace: err.stack});
            break;   

        case constants.NOT_FOUND:
            res.json({title: "NOT FOUND BRODIE", 
            message : err.message,
            stackTrace: err.stack});
            break; 
        case constants.SERVER_ERROR:
                res.json({title: "SERVER ERROR", 
                message : err.message,
                stackTrace: err.stack});
                break; 
        case constants.FORBIDDEN:
            res.json({title: "FORBIDDEN BRODIE", 
            message : err.message,
            stackTrace: err.stack});
    
            break;

            case constants.VALIDATION_ERROR:
            res.json({title: "VALIDATION FAILED", 
            message : err.message,
            stackTrace: err.stack});
        
            break;     
            
            default:
                console.log("NO ERROR");

    }

}

module.exports = errorHandler;