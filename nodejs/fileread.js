// 파일 시스템 사용 가능
const fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err,data){
    console.log(data);
});