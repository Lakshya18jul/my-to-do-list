
//create the schema for a task .....it will have a description , a deadline and a category
const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    deadline:{
        type:String,
        required:true
    }

},{
    timestamps:true
});

const Task = mongoose.model("Task" , taskSchema);
module.exports = Task;