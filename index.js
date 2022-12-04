let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!');
});

app.use(express.static('webdefinitiu'));

app.use(function (req, res, next) {
  res.status(404).send('Sorry, can\'t find that!');
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listeing at http://%s:%s', host, port);
});
