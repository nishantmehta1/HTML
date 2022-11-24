//buf = new Buffer.alloc(50);
//n=buf.write('this is a gandu class');
//console.log('the number of octat are'+n);
var buf1 = BUffer.from('wow');
var buf2=Buffer.from('hello');
var buf3=Buffer.concat([buf1,buf2],8);
console.log("The contents are "+buf3.toString());