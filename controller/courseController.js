var express = require("express");
var router = express.Router();
var courseService = require("../service/courseService");
var courseValidation = require("./courseValidation")

// Callback Functions

/* GET users listing. */
async function coursesController(req, res, next) {
  res.send(await courseService.getCourse());
}

async function addCourseController(req, res, next) {
  try {
    const {error, value} = courseValidation.addCourse.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const data = await courseService.addCourse(value);
    console.log(data);
    return res.send(data);
  }
  } catch (error) {
    res.send(error);
  }
}

async function updatedCourseController(req, res, next) {
  try {
    const {error, value} = courseValidation.updatedCourse.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const courseId = req.params.id;
    const updateCourseData = req.body;
    const updated = await courseService.updatedCourse(courseId, updateCourseData, value);
    res.send(updated);
    
  }
  } catch (error) {
    res.send(error);
  }  
}

async function deleteCourseController(req, res, next) {
  try {
    const {error, value} = courseValidation.deleteCourse.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const courseId = req.params.id;
    const deleted = await courseService.deleteCourse(courseId, value);
    res.send(deleted);
  }
  } catch (error) {
    res.send(error);
  }
}

module.exports = { coursesController, addCourseController, updatedCourseController, deleteCourseController };
