var http = require('http')

http.createServer((req,res)=>{

    if(req.url=="/")
    {
        res.write("This is Students page");
    }
    else
    {
        res.write("This is Admin page")
    }
    res.end()

}).listen(3000,()=>{
    console.log('server started')
})