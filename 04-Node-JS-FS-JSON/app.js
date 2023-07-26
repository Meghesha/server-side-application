const fs= require('fs');

let employees = [
    {id:100,name:'Meghesh', age:28,Designation:'software Engineer'},
    {id:101,name:'Rajesh', age:23,Designation:'Tech lead'},
    {id:102,name:'Lakshman', age:22,Designation:'sr. software Engineer'}
]

fs.writeFile('./employees.json',JSON.stringify(employees),'utf-8',(err)=>{
    if(err)throw err;
    console.log('data is written to a file');
})

fs.readFile('./employees.json','utf-8',(err,data)=>{
    if(err) throw err;
    let employeesData=JSON.parse(data);
    console.log(employeesData);
})

