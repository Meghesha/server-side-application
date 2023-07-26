const express = require('express');
const router= express();
const uuid = require('uuid');

let employees = [{"id":"73dc87","first_name":"Gerti","last_name":"Duigan","email":"gduigan0@hp.com","gender":"Female","ip_address":"116.19.49.90"},
{"id":"29lm58","first_name":"Shannen","last_name":"Snelgar","email":"ssnelgar1@senate.gov","gender":"Female","ip_address":"25.253.150.82"},
{"id":"11hm45","first_name":"Krissy","last_name":"Rubinov","email":"krubinov2@arstechnica.com","gender":"Female","ip_address":"224.177.12.87"},
{"id":"33cp09","first_name":"Emory","last_name":"Burnham","email":"eburnham3@google.fr","gender":"Male","ip_address":"221.130.127.196"},
{"id":"25nh31","first_name":"Hanan","last_name":"Rosendorf","email":"hrosendorf4@paginegialle.it","gender":"Male","ip_address":"71.64.49.114"}];

//REST
router.get('/',(request,response)=>{
    response.send(`<h1>Welcome to Employee Router</h1>`);
})

//Get all employees
router.get('/employees',(request,response)=>{
    response.status(200).json(employees);
})

//Get a single employee
router.get('/employees/:emp_id',(request,response)=>{
    let employeeId = request.params.emp_id;
    let selectedEmployee = employees.find(employee => employee.id === employeeId);
    response.status(200).json(selectedEmployee);

})

//Create an employee
router.post('/employees',(request,response)=>{
    let newEmployee = {
        id : uuid.v4(),
        first_name : request.body.first_name,
        lastt_name : request.body.lastt_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address
    }
    employees.push(newEmployee);
    response.status(200).json({
        msg : 'employee is created'
    });
})

//Update an employee
router.put('/employees/:emp_id',(request,response)=>{
    let employeeId = request.params.emp_id;
    let newEmployee = {
        id : employeeId,
        first_name : request.body.first_name,
        lastt_name : request.body.lastt_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address
    };
    let removableIndex = employees.map(employee => employee.id).indexOf(employeeId);
    if(employeeId !== -1){
        employees.splice(removableIndex, 1, newEmployee);
    }
    response.status(200).json({msg : 'Employee is Updated'})
})

// delete an employee
router.delete('/employees/:emp_id',(request,response)=>{
    let employeeId = request.params.emp_id;
    let removableIndex = employees.map(employee => employee.id).indexOf(employeeId);
    if(employeeId !== -1){
        employees.splice(removableIndex,1);
    }
    response.status(200).json({msg : 'Employee is deleted'})

})

module.exports = router;