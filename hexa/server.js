var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var cors = require("cors");
app.use(cors());

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mydb'
  });

  connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
  })

  //CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

   
  app.use( bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  var server = app.listen(4000, "127.0.0.1", function () {
    var host = server.address().address
    var port = server.address().port 
    console.log("Example app listening at http://%s:%s", host, port)
  });

   //route for insert data
   app.post('/sent',(req, res) => {
    let data = {name: req.body.name, course: req.body.course, email: req.body.email, mobile: req.body.mobile, joinImmediately: req.body.joinImmediately, joinLater: req.body.joinLater, subscribe: req.body.subscribe, notes: req.body.notes};
    let sql = "INSERT INTO users SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      console.log('Saved')
      res.redirect('/');
    });
  });

  app.get('/data',(req, res) => {
    
    let sql = "SELECT * FROM users";
    let query = connection.query(sql,(err, results) => {
      if(err) throw err;
      res.send(results)
      console.log('Saved')
      res.redirect('/');
    });
  });
