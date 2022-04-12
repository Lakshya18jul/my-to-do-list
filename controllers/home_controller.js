const Task = require("../models/task"); //fetch the Task model

module.exports.home = async function(req,res){

    let tasks = await Task.find({});  //get all the tasks

    return res.render("home" , {  //render the home page with all the tasks
        title:"TODO App",
        tasks:tasks
    });
}