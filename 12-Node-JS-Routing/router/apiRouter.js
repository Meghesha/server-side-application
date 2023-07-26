const fs= require('fs');
const path = require('path');

let mapRouter = (request,response) =>{
    let url = request.url;
    let method = request.method;
    if(url==='/' || url==='/home' && method==='GET'){
        fs.readFile(path.join(__dirname,'..','views','index.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            response.end(data.toString());
        }) 
    }else if(url==='/contact'&& method==='GET'){
        fs.readFile(path.join(__dirname,'..','views','contact.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            response.end(data.toString());
        }) 
    }else if(url==='/about' && method==='GET'){
        fs.readFile(path.join(__dirname,'..','views','about.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            response.end(data.toString());
        }) 
    }else if(url==='/service' && method==='GET'){
        fs.readFile(path.join(__dirname,'..','views','service.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            response.end(data.toString());
        }) 
    }else{
        fs.readFile(path.join(__dirname,'..','views','404.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            response.end(data.toString());
        }) 
    }

}

module.exports = {mapRouter};