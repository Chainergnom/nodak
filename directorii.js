var fs = require('fs');
fs.mkdir('mmm/',function (e) {
    if(e && e.code === 'EEXIST'){
        console.log(e);
    } else {
        for (i=0; i<5;i++){
            fs.writeFile('mmm/test'+[i]+'','Hello')
        }
    }
});