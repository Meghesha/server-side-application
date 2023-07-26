const express = require('express');
const app = express();
const path = require('path');

const host = '127.0.0.1';
const port = 5000;

app.get('/', (req,res)=>{
    res.send(`<h2 style="color:red">Welcome to Express JS Server</h2>`);
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

let profile = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
app.get('/profile',(req,res)=>{
    res.json(profile);
})

app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'ganapathi.jpg'));
})



app.listen(port,host,()=>{
    console.log(`Express JS Server running at http://${host}:${port}`);
})