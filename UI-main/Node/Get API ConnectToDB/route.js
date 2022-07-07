var express = require('express');
var route = express.Router();
var stud = require('./student')


route.get('/studs',async(req,res)=>{
    var istud = await stud.find();
    res.send(istud);
})

module.exports = route;