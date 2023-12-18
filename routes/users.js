// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const mongoose = require ("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ExpressDb");

const userschema = mongoose.Schema ({
  username: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("user",userschema);

// module.exports = router;
