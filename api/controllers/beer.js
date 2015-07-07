// Load required packages
var Beer = require('../models/beer');

// Create endpoint /api/beers for POSTS
exports.postBeer = function(req, res) {
  // Create a new instance of the Beer model
  var beer = new Beer();

  // Set the beer properties that came from the POST data
  beer.name = req.body.name;
  beer.brewery = req.body.brewery || 'unknown';
  beer.type = req.body.type || 'unknown';
  beer.quantity = req.body.quantity;
  beer.userId = req.user._id;

  // Save the beer and check for errors
  beer.save(function(err) {
    if (err)
      res.send(err);

    res.json(beer);
  });
};

// Create endpoint /api/beers for GET
exports.getBeers = function(req, res) {

  // Use the Beer model to find all beers
  Beer.find({ userId: req.user._id }, function(err, beers) {
    if (err)
      res.send(err);

    res.json(beers);
  });
};

// Create endpoint /api/beers/:beer_id for GET
exports.getBeer = function(req, res) {

  // Use the Beer model to find a specific beer
  Beer.findOne({ userId: req.user._id, _id: req.params.beer_id }, function(err, beer) {
    if (err)
      res.send(err);

    res.json(beer);
  });
};

// Create endpoint /api/beers/:beer_id for PUT
exports.putBeer = function(req, res) {

  // Use the Beer model to find a specific beer
  Beer.findOneAndUpdate(
    { userId: req.user._id, _id: req.params.beer_id },
    {
      brewery: req.body.brewery,
      name: req.body.name,
      type: req.body.type,
      quantity: req.body.quantity,
    },
    { new: true },
    function(err, beer) {
      if (err)
        res.send(err);

    res.json(beer);
  });
};

// Create endpoint /api/beers/:beer_id for DELETE
exports.deleteBeer = function(req, res) {

  // Use the Beer model to find a specific beer and remove it
  Beer.remove({ userId: req.user._id, _id: req.params.beer_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Beer removed' });
  });
};
