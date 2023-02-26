const express =  require('express');
const router = express.Router();

// source code of controllers can be found in Controllers/apiContorller.js
const {getController,queryController,getByIdController,postController,putController,deleteController} = require("../../Controllers/apiController")


// simple middlewere: every time this router will be called, this code will be executed
router.use((req,res,next)=>{
    console.log("using apiRouter");
    next()
})

// get
router.get("/",getController)

// get by query string, watch out query should be defined before "getting by id"
// due to syntax
router.get("/query",queryController)

// get by id
router.get("/:id",getByIdController)

// post
router.post("/",postController)

// update
router.put("/:id",putController)

// delete
router.delete("/:id",deleteController)



module.exports = router