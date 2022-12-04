let express = require('express');
let app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', function (req, res) {
  res.send('Hello World!!');
});

app.use(express.static('webdefinitiu'));

app.use(function (req, res, next) {
  res.status(404).send('Sorry, can\'t find that!');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listeing at http://%s:%s', host, port);
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
