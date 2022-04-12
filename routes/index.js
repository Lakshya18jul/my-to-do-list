const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/" , homeController.home);
router.use("/task" , require("./tasks.js"));

module.exports  = router;