const http = require('http');
const fs= require('fs');
const path = require('path');
const port = 5000;
const host = '127.0.0.1';

const server = http.createServer((request, response)=>{
    response.statusCode= 200;
    response.setHeader('COntent-Type','text/html');
    fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data)=>{
        if(err) throw err;
        response.end(data.toString());
    }) 
})

server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}`);
})
