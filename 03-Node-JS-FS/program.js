const { log } = require('console');
const fs = require('fs');

//sync way
fs.writeFileSync('./notes.text','Welcome to node js File system','utf-8');

let fileContent = fs.readFileSync('./notes.text','utf-8');
console.log(fileContent);


let content = 'Features are marked as legacy rather than being deprecated if their use does no harm,and they are widely relied upon within the npm ecosystem. Bugs found in legacy features are unlikely to be fixed.Use caution when making use of Experimental features, particularly when authoring libraries. Users may not be aware that experimental features are being used. Bugs or behavior changes may surprise users when Experimental API modifications occur. To avoid surprises, use of an Experimental feature may need a command-line flag. Experimental features may also emit a warning';
//async way
fs.writeFile('./data.txt', content,'utf-8',(err)=>{
    if(err)throw err;
    console.log('Data is written to a file');
})

fs.readFile('./data.txt','utf-8',(err,data)=>{
    if(err)throw err;
    console.log(data);
})


//Copy the current program & write to new File 'program.js'
fs.readFile('./app.js','utf-8',(err,data)=>{
    if(err)throw err;
    fs.writeFile('./program.js',data,(err)=>{
        if(err)throw err;
        console.log('data is written to progarm.js');
    })
})