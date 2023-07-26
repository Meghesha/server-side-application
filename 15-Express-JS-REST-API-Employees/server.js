const express = require('express');
const app = express();
const path = require('path');

const hostName = '127.0.0.1';
const port = '5001';

// configure express to recieve form data
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`<h2>Welcome to Express REST API</h2>`);
})

//configure router
app.use('/',require('./router/employeeRouter'));

// configure express to access a static files
// app.use('/public',express.static(path.join(__dirname,'public')));

app.listen(port,hostName,()=>{
    console.log(`Server ruuning at http://${hostName}:${port}`);
})