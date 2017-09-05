var fs = require('fs');
var array = [];
var brray = [];
// var num =0;
    array = fs.readFileSync('test.txt', 'utf8');
    array = array.split(' ');
    for (i=0; i<array.length; i++){
        var obj = {
            [array[i].replace(/,|\./,'')]:array[i].length
        };
        brray.push(obj)
    }
    console.log(brray);
// var start = setInterval(function () {
//     var mas = array.length-1;
//     if (mas-num===0){
//         clearInterval(start)
//     }
//     var bb=array[num];
//     var b=array[num].length;
//     brray[num] = {[bb]:b};
//     num++}
//     ,1000);
// console.log(brray);
