// var EventEmitter = require('events')
var notify = require('./eventerListener');
var express = require('express');
var bodyParser = require('body-parser');
var routes =require('./routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((express.json()));


const port = process.env.PORT || 7000;

app.use('/', routes);

app.listen(port);

// console.log('server started on port', port);
module.exports =  app;