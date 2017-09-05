var fs = require('fs');
fs.readFile('json.json', function (err,data) {
    if (err) throw err;
    var text = JSON.parse(data);
    for (var key in text) {
        if (text[key].name){
            console.log(text[key]);
        }
    }
});