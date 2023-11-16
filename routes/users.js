var express = require("express");
const users = require("../controller/userController");
const {
  verifyToken,
  login,
} = require("../controller/common/authenticationController");
var router = express.Router();

/* GET users listing. */
router.get("/", verifyToken, users.usersController);
router.post("/login", login);
router.post("/add", users.addUserController);
router.put("/update/:id", users.updatedUserController);
router.delete("/delete/:id", users.deleteUserController);

module.exports = router;
