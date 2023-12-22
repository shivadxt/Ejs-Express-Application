var express = require('express');
var router = express.Router();
const userModel = require("./users");
const session = require('express-session');
const { route } = require('../app');


/* GET home page. */
//Working on Cookies:
//Creating Cookie:
router.get('/', function(req, res, next) {
  //We are setting cookie using response i.e. res.cookie because cookies are saved on 
  //frontend browser we're setting them from server so we have to send it in response.
  res.cookie("age",25)
  res.render('index', { title: 'Express' });
});


//Reading cookie
router.get("/readcookie", function(req,res){
  //Now we're reading cookie using request as we're at server all the data we 
  //recieve in server are in form of request as it's coming from browser to server
  console.log(req.cookies.age);
  res.send("Reading Cookie");
});


//Deleting cookie
router.get("/rmcookie",function(req,res){
  res.clearCookie("age");
  res.send("Cookie Deleted");
});


//WORKING ON SESSIONS:
//creating a function to ban a user

//Creating a session
router.get("/ban",function(req,res){
  req.session.ban = true;
  res.send("BANNED !");
});

//Reading a session
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

//Deleting a session
router.get("/removeban",function(req,res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("Ban Removed !")
  })
});


// MONGO-DB OPERATIONS
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


module.exports = router;
