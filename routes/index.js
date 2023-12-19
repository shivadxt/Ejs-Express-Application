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

router.get("/allusers", async function(req,res){
 let allUser = await userModel.find();
 res.send(allUser);
});

router.get("/findone", async function(req,res){
  let findUser = await userModel.findOne({username:"Shivam"});
  res.send(findUser);
})

router.get("/delete", async function(req,res){
  let deletedUser = await userModel.findOneAndDelete({
    username: "Shivam"
  });
  res.send(deletedUser);
})



module.exports = router;
