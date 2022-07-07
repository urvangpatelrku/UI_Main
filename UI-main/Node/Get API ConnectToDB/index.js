var mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')
var route = require('./route')

mongoose.connect("mongodb+srv://fenilbabariya:410mongo@cluster0.ttnszx3.mongodb.net/student?retryWrites=true&w=majority").then(()=>{
    console.log("DB Connected");

    app = express()
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)

    app.listen(3000,()=>{
        console.log("Server started");
    })

}).catch((err)=>{
    console.log(err)
})

