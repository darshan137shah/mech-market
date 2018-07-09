//App Config
var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  jwt = require('jsonwebtoken'),
  app = express();

app.use(cors({
    origin: "http://localhost:4200"
  }
));

//App -pre
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mech_app');
mongoose.Promise = global.Promise;
var db = mongoose.connection;


//Collection Schemas

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  phone: Number
});
var User = mongoose.model("User", userSchema);

var productSchema = new mongoose.Schema({
  productId: Number,
  productName: String,
  productCode: String,
  releaseDate: String,
  description: String,
  price: Number,
  starRating: {type: Number, default: 0},
  imageUrl: String

})
var Product = mongoose.model("Product", productSchema);

//Authentication Requests
app.post('/login', function(req, res) {

  let token = jwt.sign({username: req.body.username}, 'thisisasecretkey', {
    expiresIn: '1h'
  });

  if(req.body.username) {
    User.find(req.body, function (err, data) {
      if(data.length) {
        res.send({
          isLoggedIn: true,
          token: token
        }) } else {
        res.send({
          isLoggedIn: false,
          token: false
        })
      }
    })
  } else {
    res.send({
      isLoggedIn: false,
      token: false
    })
  }
})

app.use(function(req, res, next) {
  var token = req.body.token || req.headers['token'];
  jwt.verify(token, 'thisisasecretkey', function(err, decoded) {
    if(!err && decoded) {
      req.decoded = decoded;
      next();
    } else {
      res.send({
        flag: "Error",
        err: "Token is not verfied"
      })
    }
  })
})

app.get('/getData', function(req, res) {
  Product.find(function(err, data) {
    if(!err) {
      res.send(data);
    } else {
      res.send(err);
    }
  })
})

//DB Connection and Port Configuration
db.on('err', console.error.bind(console, 'MongoDB Connection Error: '));
db.once('open', function() {
  app.listen('3001', function() {
    console.log('Server Started!');
  })
  console.log("DB Connected!");
})
