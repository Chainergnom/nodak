var fs = require('fs');
var time = new Date();

fs.readFile('test.txt', 'utf8', function (err,data) {
    console.log(''+data);
    var donetime = new Date();
    console.log(donetime-time);
    });
