var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(https);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

https.listen(4000, function(){
  console.log('listening on *:4000');
});