var express = require('express');
var router = express.Router();
const userModel = require("./users");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Create user
router.get('/create', async function(req, res) {
  const userCreate = await userModel.create({
    username: "Shivam",
    age: 25,
    name: "Shiv"
  });
  res.send(userCreate);
});

//Find all users
router.get("/allusers", async function(req,res){
 let allUser = await userModel.find();
 res.send(allUser);
});

//Find single user
router.get("/findone", async function(req,res){
  let findUser = await userModel.findOne({username:"Shivam"});
  res.send(findUser);
})

//Delete user 
router.get("/delete", async function(req,res){
  let deletedUser = await userModel.findOneAndDelete({
    username: "Shivam"
  });
  res.send(deletedUser);
})



module.exports = router;
