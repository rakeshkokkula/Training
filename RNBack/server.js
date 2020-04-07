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
  var server = app.listen(4000, "192.168.0.7", function () {
    var host = server.address().address
    var port = server.address().port 
    console.log("Example app listening at http://%s:%s", host, port)
  });

      //route for insert data
      app.post('/sent',(req, res) => {
        let data = {Name: req.body.name, Email: req.body.email, Phone: req.body.phone, Message: req.body.message};
        console.log(data)
        let sql = "INSERT INTO register SET ?";
        let query = connection.query(sql, data,(err, results) => {
          if(err) throw err;
          res.send('Successfully added');
        });
      });

      //route for get data
      app.get('/data', function (req, res) {
        connection.query('select * from register', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
     });

     app.delete('delete', function(req, res) {
       let del = [req.body.Id]
       connection.query('DELETE FROM register WHERE ID = ?', del , function (error, results, fields) {
        if (error) throw error;
        res.send('Successfully Deleted');
      });
     })
  