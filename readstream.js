var fs = require("fs");
const http=require('http');
const server = http.createServer();
//Create a readable stream
server.on('request',(req,res)=>{
    const src = fs.createReadStream('test.txt');
    src.pipe(res);
});
server.listen(2000);