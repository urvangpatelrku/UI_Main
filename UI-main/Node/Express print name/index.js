var http = require('http')
var express = require('express')
var app = express()

// http.createServer((req,res)=>{
//     res.write("Hello");
//     res.end();
// }).listen(3000,()=>{
//     console.log("server started");
// })

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.listen(3000,()=>{
    console.log("server started");
});