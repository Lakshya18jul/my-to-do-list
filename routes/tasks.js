const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task_controller");

router.post("/create-task" , taskController.createTask);
router.post("/delete-task" , taskController.deleteTask);

module.exports  = router;