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
      res.send(results)
      res.redirect('/');
    });
  });

      //route for get data
      app.get('/data', function (req, res) {
        connection.query('select * from users', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
     });
//route for get data
app.get('/update/:id', (req, res) => {
  const update = req.params.id
  console.log(update)
  connection.query('select * from users where id=?',update, function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

//rest api to delete record from mysql database
app.delete('/del/:id', (req, res) => {
   console.log(req.params.id);
  
  const dat = [req.params.id]
  const del = 'DELETE FROM users WHERE id= ?'
   connection.query(del, dat, function (error, results, fields) {
    if (error) throw error;
    res.send('Deleted Row(s):', results.affectedRows)
    console.log('Deleted Row(s):', results.affectedRows);
	 res.end('Record has been deleted!');
	});
});