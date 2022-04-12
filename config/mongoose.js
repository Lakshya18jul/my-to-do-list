//setup the mongoose data base
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ToDo_App");

const db = mongoose.connection;
db.on("error" , console.error.bind(console , "Error in connecting to mongodb"));
db.once("open" , function(){
    console.log("Connected to the Database");
});

module.exports = db;