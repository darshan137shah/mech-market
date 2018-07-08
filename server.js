//App Config
var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  cors = require('cors'),
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

app.get('/getData', function(req, res) {
  Product.find(function(err, data) {
    if(!err) {
      console.log('It is sending the data')
      res.send(data);
    } else {
      console.log(err);
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
