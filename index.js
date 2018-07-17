// server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

// Our first route
app.get('/', function (req, res) {
  res.render("home");
});

// Listen to port
app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});