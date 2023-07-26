const express = require('express');
const app = express();
const path = require('path');

const hostName = '127.0.0.1';
const port = '5001';

//configure router
app.use('/',require('./router/apiRouter'));

// configure express to access a static files
app.use('/public',express.static(path.join(__dirname,'public')));

app.listen(port,hostName,()=>{
    console.log(`Server ruuning at http://${hostName}:${port}`);
})