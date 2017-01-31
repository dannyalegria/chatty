var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

app.listen(3000, function(){
  console.log('listening on port 3000')
})

var messages = [];

//GET

app.get('/messages', function(req, res, next){
  res.status(200).json({messages: messages});
});

//POST

app.post('/messages', function(req, res, next){
  messages.push({message: req.body.message, time: new Date()});
  res.status(200).json({messages: messages});
});
