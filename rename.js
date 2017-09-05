var fs = require('fs');
fs.rename('test2.txt','rename.txt',function (err) {
    if (err) throw err;
    console.log('Files succefully renamed');
});