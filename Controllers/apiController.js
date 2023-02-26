const fs = require('fs');
const path = require('path');

const getController = (req,res)=>{
    // import dummy Json data || this could be axios / fetch call
    // data path is relative to index.js
    var pathToDummyData = path.normalize("dummyData.json");
    dummyData = fs.readFileSync(pathToDummyData);

    // build json object
    var dummyDataJson = JSON.parse(dummyData);

    res.status(200);
    res.json(dummyDataJson)
}

const queryController = (req,res)=>{
    // import dummy Json data || this could be axios / fetch call
    // data path is relative to index.js
    var pathToDummyData = path.normalize("dummyData.json");
    var dummyData = fs.readFileSync(pathToDummyData);

    // build json object
    var dummyDataJson = JSON.parse(dummyData);

    // get query from call -> api/query?searchBrand=Apple
    var {searchBrand} = req.query

    // match protucts with query
    var productFound =  dummyDataJson.products.filter((product) => product.brand === searchBrand);

    res.status(200);
    res.json(productFound)
}

const getByIdController = (req,res)=>{
    // import dummy Json data || this could be axios / fetch call
    // data path is relative to index.js
    var pathToDummyData = path.normalize("dummyData.json");
    var dummyData = fs.readFileSync(pathToDummyData);

    // build json object
    var dummyDataJson = JSON.parse(dummyData);

    // get ID from call
    var id = req.params.id

    // match protuct with id
    console.log("getbyid")
    var productFound =  dummyDataJson.products.find((product) => String(product.id) === id);

    res.status(200);
    res.json(productFound)
}

const postController = (req,res)=>{
    // getting post from form  -> make sure you've set body parser: app.use(express.urlencoded({extended:flase}))
    // so that all data is available through body

    // getting post form fetch -> make sure you've also set body parser for incoming json: app.use(express.json())

    // getting data from fetch & from are identical then (after you've set both parsers)
    var data = req.body;
    
    // lets say we anticipating param called "name"
    var incomingName = data.name;

    res.status(201);
    res.send(`<h1>API POST route, your data:  </h1><p>${incomingName}</p>`)  
}

const putController = (req,res)=>{
    // get ID of obj, you want to change
    var objId = req.params.id;

    // get new data that should replace old data
    var newData = req.body;

    // lets say we are anticipating username and password
    var {username, password} = newData;

    res.status(201);
    res.send(`<h1>API PUT route</h1><p> You've just update obj w id=${objId},now the params are: ${username},${password}`)  
}

const deleteController = (req,res)=>{

    // get ID of obj, you want to delete
    var objId = req.params.id

    res.status(201);
    res.send(`<h1>API DELETE route</h1><p> You deleted obj w id of ${objId}`)  
}


module.exports = {

    getController,queryController,getByIdController,postController,putController,deleteController
}