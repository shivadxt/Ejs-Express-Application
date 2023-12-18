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