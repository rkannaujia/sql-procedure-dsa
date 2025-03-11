const fs = require('fs');
const filePath = __dirname + '/os.js';
fs.readFile(filePath,'utf-8', (err,data)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(data);
    }
})

