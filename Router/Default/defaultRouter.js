const express =  require('express');
const router = express.Router();


// simple middlewere: every time this router will be called, this code will be executed
router.use((req,res,next)=>{
    console.log("using defaultRouter");
    next()
})

// get
router.get("/",(req,res)=>{

    res.status(200);
    res.send("<h1>Default GET route</h1>")
})

// post
router.post("/",(req,res)=>{
    res.status(201);
    res.send("<h1>Default POST route</h1>")  
})


// update
router.put("/",(req,res)=>{
    res.status(201);
    res.send("<h1>Default PUT route</h1>")  
})

// delete
router.delete("/",(req,res)=>{
    res.status(201);
    res.send("<h1>Default DELETE route</h1>")  
})



module.exports = router