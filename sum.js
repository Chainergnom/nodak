var fs = require('fs');
var a = +process.argv[2];


function read (){
    var r = fs.readFileSync(a);
    console.log(r);
}