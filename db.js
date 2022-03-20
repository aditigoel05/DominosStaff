const mongoose = require("mongoose");
var mongoURL ="mongodb+srv://aditigoel:1234@cluster0.ricjm.mongodb.net/mern-dominos"
mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})
var db = mongoose.connection
db.on('connected',()=>{
    console.log("mongo db connection successful");
})
db.on('error',()=>{
    console.log("mongo db connection failed");
})
module.exports = mongoose