
const express = require('express');
//create app object
const app = express();
//Route Creation
// Home route
const jsonData = require("./data")

app.get("/getUser",function(req,res){
    console.log(jsonData.student.fun())
    res.json(jsonData.student)
})
// api/main route
app.get("/",function(req,res){
    res.json(jsonData)
})

app.listen(9000);//port number