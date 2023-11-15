var express = require("express");
const students = require("../controller/studentController");
var router = express.Router();

/* GET users listing. */
router.get("/", students.studentsController);
router.post("/add", students.addStudentController);
router.put("/update/:id",students.updatedStudentController);
router.delete("/delete/:id",students.deleteStudentController);
router.post("/enrollStudent", students.enrollStudentController);
router.get("/coursesByStudent/:id", students.coursesByStudentController);

module.exports = router;
