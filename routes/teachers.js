var express = require("express");
const teachers = require("../controller/teacherController");
var router = express.Router();

/* GET users listing. */
router.get("/", teachers.teachersController);
router.post("/add", teachers.addTeacherController);
router.put("/update/:id",teachers.updatedTeacherController);
router.delete("/delete/:id",teachers.deleteTeacherController);
router.post("/registerTeacher", teachers.registerTeacherController);
router.get("/coursesByTeacher/:id", teachers.coursesByTeacherController);

module.exports = router;
