
// setup the express server
const express = require("express");
const port = 8000;
const db = require("./config/mongoose");

const app = express();

//for backend to read the form data use url encoded
app.use(express.urlencoded());

//setup the routes and the assets folder
app.use("/" , require("./routes/index"));
app.use(express.static("./assets"));

//setup the view engine
app.set("view engine" , "ejs");
app.set("views" , "./views");

app.listen(port , function(err){
    if(err){
        console.log("Error in running the server" , err);
        return;
    }
    console.log("Server is running on port " , port);
});