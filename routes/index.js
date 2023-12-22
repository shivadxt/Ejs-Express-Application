var express = require('express');
var router = express.Router();
const userModel = require("./users");
const session = require('express-session');


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
});

//Delete user 
router.get("/delete", async function(req,res){
  let deletedUser = await userModel.findOneAndDelete({
    username: "Shivam"
  });
  res.send(deletedUser);
});


//creating a function to ban a user
router.get("/ban",function(req,res){
  req.session.ban = true;
  res.send("BANNED !");
});

router.get("/check",function(req,res){
  if(req.session.ban === true){
    res.send("You're Banned wait for sometime !");
  }
  else{
    res.send("You're Not Banned");
  }
});

router.get("/unban",function(req,res){
  if (req.session.ban === true){
    req.session.ban = false;
    res.send("now ban has removed but session is not destroyed !");
  }
  else {
    res.send("Your ban is already removed and session is destroyed !")
  }
});

router.get("/removeban",function(req,res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("Ban Removed !")
  })
})



module.exports = router;
