var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname + '/dist/<antibiotic-resistance-app>'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/<antibiotic-resistance-app/index.html'));});
app.listen(process.env.PORT || 8080);
