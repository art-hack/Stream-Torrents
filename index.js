// server
var express = require('express');
var app = express();
var ejs = require('ejs')
app.set('port', process.env.PORT || 5000);
app.set("view engine", "ejs");

// Our first route
app.get('/', function (req, res) {
  res.render("home");
});

// Listen to port
app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});