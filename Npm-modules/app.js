const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const uuid = require('uuid');

let user={
    name : 'Meghesh',
    email : 'megha@gmail.com',
    pwd : '123abc'
}

var imgUrl = gravatar.url('emerleite@gmail.com', {s: '200', r: 'pg', d: '404'});

var salt = bcrypt.genSaltSync(10);
var hashPwd = bcrypt.hashSync(user.pwd, salt);
// console.log(hashPwd);
let updatedUser = {
    id : uuid.v4(),
    ...user,
    pwd : hashPwd,
    imgage : imgUrl
}
console.log(updatedUser);

let isMatch = bcrypt.compareSync('123abc', hashPwd); // true
if(isMatch){
    console.log('Login is Success');
}else{
    console.log('Invalid Credentials');
}

