const http = require('http');
const port = 5000;
const host = '127.0.0.1';
const router = require('./router/apiRouter');

const server = http.createServer((request, response)=>{
    response.statusCode= 200;
    response.setHeader('COntent-Type','text/html');
    router.mapRouter(request,response);  
})

server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}`);
})
