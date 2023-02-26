const simpleLogger = (req,res,next) => {
    var method = req.method;
    var url = req.baseUrl;
    var date =  new Date().getFullYear();
    console.log("simpleLogger-simpleMiddlewere.js",method,url,date);
    next()
}


const extendedLogger = (req,res,next) => {
    var method = req.method;
    var url = req.baseUrl;
    var date =  new Date();
    var header = req.rawHeaders;
    console.log("extendedLogger-simpleMiddlewere.js",method,url,date);
    console.log(header);
    next()
}

module.exports = {
    simpleLogger,extendedLogger
}