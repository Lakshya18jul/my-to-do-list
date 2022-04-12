const Task = require("../models/task"); //require the Task model

module.exports.createTask = async function(req,res){
    //create a task when user clicks on +ADD TASK
    try{
        let task = await Task.create({
            description:req.body.description,
            category:req.body.category,
            deadline:req.body.deadline
        });
        return res.redirect("back");

    }catch(err){
        console.log("Error in creating the Task " , err);
        return;
    }
}

module.exports.deleteTask = function(req,res){
    //when user clicks on delete tasks check the checkbox data in backend
   if(typeof(req.body.checked_task) == "undefined"){
       //checkbox gives undefined when no checkbox is selected 
       return res.redirect("back");

   }else if(typeof(req.body.checked_task)=="string"){
       //checkbox gives a string when only a single task is selected
       Task.findByIdAndDelete(req.body.checked_task , function(err){
            if(err){
                console.log("Error in deleting task from DB" , err);
                return;
            }
            return res.redirect("back");
       });
   }else{
       //checlbox returns an object of all tasks when multiple tasks have been selected
       for(let i=0;i<req.body.checked_task.length;i++){
            Task.findByIdAndDelete(req.body.checked_task[i], function(err){
                    if(err){
                        console.log("Error in deleting task from DB" ,err);
                        return;
                    }                    
            });
            
       }
       return res.redirect("back");
   }
}