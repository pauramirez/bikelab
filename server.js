/* Required libraries */
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dust = require('dustjs-helpers');
var cons = require('consolidate');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var path = require('path');

/* Express app */
var app = express();
var port = process.env.PORT || 8080;

mongoose.connect('mongodb://admin:asd123456@ds153198.mlab.com:53198/bikelab');

// Assign dust engine
app.engine('dust', cons.dust);

// Set default engine
app.set('view engine','dust');
app.set('views', __dirname + '/views');

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cookieParser());


app.use(session({
  secret: 'hola',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.get('/', (req,res)=>{
  res.render('index');
});
app.get('/contact', (req,res)=>{
  res.render('contact');
});
app.get('/accessories', (req,res)=>{
  res.render('search');
});

// Server
app.listen (port, ()=>{
  console.log('App running');
});
