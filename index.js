const express = require('express');
var app = express();

// import routers
var defaultRouter = require('./Router/Default/defaultRouter.js');
var authRouter = require('./Router/RegistrationAndLogin/auth.js');
var apiRouter = require('./Router/API/api.js');

//import my custom middlewares
const {simpleLogger,extendedLogger} = require("./CustomMiddlewares/simpleMiddlewere");


const PORT = 8000 || process.env.PORT;

// make sure you set parsers before actual api calls

// handeling incoming forms data
app.use(express.urlencoded({extended:false}));
// handeling incoming json data
app.use(express.json());


// set my custom middlewares

// set middleware to 1 route
//app.use('/',extendedLogger);

// to multiple routes

app.use(['/api','/auth'],simpleLogger);

// to all routes
//app.use(simpleLogger);


// set routers
app.use('/', defaultRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);


// match everithing -> 404
// node.js is executed sequentionally, if we didn't find
// route so far, it means that we did not specified that route
// which means -> 404
app.get('*',(req,res)=>{
    res.status(404);
    res.json({"Sprava":"404"})
})



app.listen(PORT,console.log(`Alive on port ${PORT}`))