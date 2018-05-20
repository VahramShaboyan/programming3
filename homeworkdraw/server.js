var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cords = [];
app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);
io.on('connection', function (socket) {
    for (i in cords){
        io.sockets.emit("sendtoall", cords[i]);
    }
    socket.on("send", function(data){
        cords.push(data);
        io.sockets.emit("sendtoall", data);
    });
});
 