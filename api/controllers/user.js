// Load required packages
var User = require('../models/user');

function cleanse(user) {
  user = user.toObject();
  delete user["password"];
  user.authenticated = true;
  return user;
}

// Create endpoint /api/users for POST
exports.postUser = function(req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password
  });
  User.findOne({ username: user.username }, function (err, found) {
    if (err) {
      res.send(err);
    }
    console.log(found);
    if (found === null) {
      user.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json(cleanse(user));
      });
    } else {
      res.status(500).send('Username already taken');
    }
  });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
};

// Create endpoint /api/users/:username for GET
exports.getUser = function(req, res) {
  // Use the User model to find a specific user
  User.findOne({ username: req.params.username }, function(err, user) {
    if (err)
      res.send(err);

    res.json(cleanse(user));
  });
};

// Create endpoint /api/users/:username for DELETE
exports.deleteUser = function(req, res) {
  // Use the User model to find a specific user and remove it
  User.remove({ _id: req.user._id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'User removed' });
  });
};

exports.seedAdmin = function (req, res) {
  //if no admin account exists, seed one
  User.findOne({ username: 'admin' }, function (err, user) {
    if (err)
      res.send(err);
    if (!user) {
      var user = new User({
        username: 'admin',
        password: 'ramen'
      });

      user.save(function(err) {
        if (err)
          res.send(err);

        res.json(cleanse(user));
      });
    }

  })
}
