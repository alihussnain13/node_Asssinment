var express = require("express");
const courses = require("../controller/courseController");
var router = express.Router();

/* GET users listing. */
router.get("/", courses.coursesController);
router.post("/add", courses.addCourseController);
router.put("/update/:id",courses.updatedCourseController);
router.delete("/delete/:id",courses.deleteCourseController);

module.exports = router;
