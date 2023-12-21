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

- Sessions:
  -Install package : npm i express-session
  -Creating sessions : req.session.sessionname = variable;
  -Using sessions across routes : req.session.sessionname
  -Destroying sessions : req.session.destroy

- Cookies:
  -Creating cookies.
  -Using cookies across routes.
  -Destroying cookies. 