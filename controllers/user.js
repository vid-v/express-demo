var User = require('../model/user');

/**
 * Do user creation
 */
exports.createUser = (req, res, next) => {
  if (req.body && req.body.email && req.body.name && req.body.password) {
    User.find({ email: req.body.email }, function (err, user) {
      if (err)
        return res.status(500).send("Server failed to process the data");
      if (user.length == 0){
        User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        },
        function (err, user) {
          if (err) return res.status(500).send("Server failed to process the data");
          res.status(200).send(user);
        });
      } else {
        return res.status(500).send("User already exixts");
      }
    });
  } else {
    return res.status(500).send("Server failed to process the data");
  }
}

/**
 * Do user login
 */
exports.doLogin = (req, res, next) => {
  if (req.body && req.body.email && req.body.password) {
    User.find({ email: req.body.email }, function (err, user) {
      if (err) 
        return res.status(500).send("Server failed to process the data");
      if (user.length == 0) 
        return res.status(404).send("No user found.");
      res.status(200).send("Logged In Successfully");
    });
  } else {
    return res.status(404).send("No user found.");
  }
}