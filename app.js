var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//mongo
//var monk = require('monk');
//var db = monk('mongodb+srv://AzizStark:<password>@cluster0-bwssb.gcp.mongodb.net/test?retryWrites=true&w=majority');
//Pure Mongo
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AzizStark:148635Stark@cluster0-bwssb.gcp.mongodb.net/test?retryWrites=true&w=majority"

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


let dbo;


MongoClient.connect(uri,{useUnifiedTopology: true}, function(err, client) {
  if(err) {
       console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  else{
       console.log('Connected...');
  }       
  dbo = client.db("Sample");
  const collection = client.db("test").collection("devices");
  
  var query ={}

  dbo.collection("usercollection").find(query).toArray(function(err, result) {
    if (err) {
         console.log("Query Error");
    }

    console.log(result);

    let obj = result;
    console.log(obj[0].username);

  });

});

app.use(function(req,res,next){
  req.dbo = dbo;
  console.log("Db function");
  next();
});

/* Make our db accessible to our router ; must be before indexrouter
app.use(function(req,res,next){
  req.db = db;
  console.log("Db function");
  next();
});*/



app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
