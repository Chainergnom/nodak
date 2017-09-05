var fs = require('fs');
fs.rmdir('mmm/',function (e) {
    if(e && e.code === 'EEXIST'){
        console.log(e);
    } else {
        for (i=0; i<5;i++){
            fs.unlink('mmm/test'+[i])
        }
        fs.rmdir('mmm/')
    }
});