var http = require('http')
var url = require('url')
var qs = require('querystring')

http.createServer((req,res)=>{

    var query = url.parse(req.url).query;
    var uname = qs.parse(query)['uname'];
    var dept = qs.parse(query)['dept'];
    console.log(uname);
    console.log(dept);

}).listen(3000,()=>{
    console.log("server started")
})