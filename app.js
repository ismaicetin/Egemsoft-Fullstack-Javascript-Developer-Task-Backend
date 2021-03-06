
var express = require('express');
var bodyParser = require('body-parser')
var app = express(); 
const cors = require('cors');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var db = require("./config/db");

app.use(cors());

io.on('connection', socket => {
  console.log('kullanıcı baglandı')
  socket.on('disconnect', () => {
    console.log('kullanıcı baglantıyı kesti')
  })
})

// db connection
require("./config/db");
//app.use(db.dbconnection);


app.use(bodyParser.json());

const port = process.env.PORT || 4001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


socketsConnection = (req, res,next ) => {
  req.sockets=io.sockets;

 console.log("denme");
 next();
 //io.sockets.emit('products', "color")
 //res.status(200).json({});
};


app.use(socketsConnection)     

// API ENDPOINTS
app.use('/api', require("./router"))



 

var server = http.listen(port, () => {
  console.log(`Server (Açmak için ctrl + Left click) http://localhost:${port}`);
});