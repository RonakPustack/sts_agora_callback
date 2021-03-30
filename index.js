// changed the name of the procfile
var express = require('express');
var STS = require('ali-oss').STS;
var co = require('co');
var fs = require('fs');
var app = express();

app.use(express.json());

app.post('/', function (req, res) {
  return res.status(200).send(req.body);
});

const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
  console.log('App started.');
});