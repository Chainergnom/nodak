var fs = require('fs');
// var data = fs.readFileSync('test.txt');
// console.log(data.toString());
// console.log(''+data);
// console.log('file read');

fs.readFile('test.txt', 'utf8', function (err,data) {
    console.log(''+data);
    fs.writeFile('test2.txt', function (err,data) {
        return data;

    });
});
var stats = fs.statSync('test.txt');
var size = stats.size;
console.log(size);
// console.log('file read');