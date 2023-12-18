var express = require('express');
var router = express.Router();
const userModel = require("./users");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function(req, res) {
  const userCreate = await userModel.create({
    username: "Shivam",
    age: 25,
    name: "Shiv"
  });
  res.send(userCreate);
});



module.exports = router;
