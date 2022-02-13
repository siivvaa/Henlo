var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
const mongoose = require("mongoose");

const dbUri = "mongodb+srv://chibbaa:8psdJAVJrAuWEZ7z@5chin.ngorh.mongodb.net/blog-posts?retryWrites=true&w=majority"

mongoose.connect(dbUri, {useNewUrlParser: true});

var router = require('./routes/router.js');
var app = express();

// view engine setup
app.set('views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/static'));

let port = process.env.PORT;
if(port==null || port== "")
{
  port=3000;
}

app.listen(port, (req,res) => {
  console.log("Server up and running!");
})

app.use('/', router);
app.use('/home', router);
app.use('/create', router);

