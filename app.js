var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session = require("express-session");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Setting up session 
app.use(session({
  resave:false, 
  //Takes a Boolean value. It enables the session to be stored back to the session store, 
  //even if the session was never modified during the request. 
  //This can result in a race situation in case a client makes two parallel requests to the server. 
  saveUninitialized:false, 
  //Not saving useless information that is not required
  //this allows any uninitialized session to be sent to the store. 
  //When a session is created but not modified, it is referred to as uninitialized.
  secret:"Hello There" 
  //a random unique string key used to authenticate a session. 
  //It is stored in an environment variable and can’t be exposed to the public. 
  //The key is usually long and randomly generated in a production environment.
}));

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
