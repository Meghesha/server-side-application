const http = require('http');
const host = '127.0.0.1';
const port = 5000;

const server = http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('Content-Type','text/plain');
    response.end('Welcome to Node js Server');
})

server.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`);
})