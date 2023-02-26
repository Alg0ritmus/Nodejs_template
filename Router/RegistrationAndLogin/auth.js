const express = require('express');
const { route } = require('../Default/defaultRouter');
const router = express.Router();

// simple middlewere: every time this router will be called, this code will be executed
router.use((req,res,next)=>{
    console.log("using authRouter");
    next()
})


// get
router.get("/",(req,res)=>{

    res.status(200);
    res.send("<h1>Auth GET route</h1>")
})

// post
router.post("/",(req,res)=>{
    res.status(201);
    res.send("<h1>Auth POST route</h1>")  
})


// update
router.put("/",(req,res)=>{
    res.status(201);
    res.send("<h1>Auth PUT route</h1>")  
})

// delete
router.delete("/",(req,res)=>{
    res.status(201);
    res.send("<h1>Auth DELETE route</h1>")  
})



module.exports = router