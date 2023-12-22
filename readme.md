Install Mongoose
- npm i mongoose


Require and Setup Mongoose
- const mongoose = require("mongoose");
- mongoose.connect(mongodb://127.0.0.1:27017/ExpressDb)


Create Schema
- const schema = mongoose.Schema ({ username: String, name: String, age: number })

Create model and export
- module.exports = mongoose.model("user",schema) 
- "user" is the models name we have provided to the schema name "schema"

Working on CRD Operations of MongoDB:
- create()
- find()
- findOne()
- findOneAndDelete()

Learning in deep about Session and Cookies:

Sessions:
 - Install package : npm i express-session

 - Setup : app.use(session({
  resave:false, 
  saveUninitialized:false, 
  secret:"blabalakatahegxvhdbw990" 
  }));

 - Creating sessions : req.session.sessionname = variable;

 - Using sessions across routes : req.session.sessionname

 - Destroying sessions : req.session.destroy


Cookies:
 - Install package : npm i cookie-parser (Already installed in ejs app)

 - Setup : app.use(cookieParser());      (Already setup in app.js)

 - Creating cookies : res.cookie("name",value);

 - Using cookies across routes: req.cookies.name;

 - Destroying cookies: res.clearCookie("name");