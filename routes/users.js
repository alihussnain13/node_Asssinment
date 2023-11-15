var express = require("express");
const users = require("../controller/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", users.usersController);
router.post("/add", users.addUserController);
router.put("/update/:id",users.updatedUserController);
router.delete("/delete/:id",users.deleteUserController);

module.exports = router;
