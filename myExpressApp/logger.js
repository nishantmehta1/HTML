var expresss = require('express')
var app = express()
var myLogger = function(req, res,next){
    console.log('LOGGED')
    next()
}
app.use(myLogger)
app.get('/',function(req,res){
    res.send('HELLO WORLD')
})
app.listen(3000)