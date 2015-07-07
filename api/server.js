// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');

// Load controllers
var authController = require('./controllers/auth');
var beerController = require('./controllers/beer');
var userController = require('./controllers/user');

var port = process.env.PORT || 8080;
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/ramen-stack';

// Connect to the ramen-stack MongoDB
mongoose.connect(mongoUri);

console.log('Mongoose connected to ' + mongoUri);

// Create our Express application
var app = express();

app.use(cors());
// Use the body-parser package in our application
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /beers
router.route('/beers')
  .post(authController.isAuthenticated, beerController.postBeer)
  .get(authController.isAuthenticated, beerController.getBeers);

// Create endpoint handlers for /beers/:beer_id
router.route('/beers/:beer_id')
  .get(authController.isAuthenticated, beerController.getBeer)
  .put(authController.isAuthenticated, beerController.putBeer)
  .delete(authController.isAuthenticated, beerController.deleteBeer);

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUser)
  .get(authController.isAuthenticated, userController.getUsers);

router.route('/users/:username')
  .get(authController.isAuthenticated, userController.getUser);

// Register all our routes with /api
app.use('/api', router);

userController.seedAdmin();

// Start the server
app.listen(port);

console.log('API Started at http://localhost:' + port + '/');
