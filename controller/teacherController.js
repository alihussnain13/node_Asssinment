var express = require("express");
var router = express.Router();
var teacherService = require("../service/teacherService");
var teacherValidation = require("./teacherValidation")

// Callback Functions

/* GET users listing. */
async function teachersController(req, res, next) {
  res.send(await teacherService.getTeacher());
}

async function addTeacherController(req, res, next) {
  try {
    const {error, value} = teacherValidation.addTeacher.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const data = await teacherService.addTeacher(value);
    console.log(data);
    return res.send(data);
  }
  } catch (error) {
    res.send(error);
  }
}

async function updatedTeacherController(req, res, next) {
  try {
    const {error, value} = teacherValidation.updatedTeacher.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const teacherId = req.params.id;
    const updateTeacherData = req.body;
    const updated = await teacherService.updatedTeacher(teacherId, updateTeacherData, value);
    res.send(updated);
    
  }
  } catch (error) {
    res.send(error);
  }  
}

async function deleteTeacherController(req, res, next) {
  try {
    const {error, value} = teacherValidation.deleteTeacher.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const teacherId = req.params.id;
    const deleted = await teacherService.deleteTeacher(teacherId, value);
    res.send(deleted);
  }
  } catch (error) {
    res.send(error);
  }
}

async function registerTeacherController (req, res, next){
  try{
    const {error, value} = teacherValidation.registerTeacher.validate(req.body, {
      abortEarly:false,
    });
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const {teacherId, courseId} = value;
      const newlyRegistered = await teacherService.registerTeacher(teacherId, courseId);
      return res.send(newlyRegistered);
    }
  } catch (error) {
    res.send(error);
  }
}

async function coursesByTeacherController (req, res, next){
  try {
    const {error, value} = teacherValidation.coursesByTeacher.validate(
      {id: req.params.id},
      {
        abortEarly: true,
      }
    );
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const teacherId = Number(value.id);
      const data = await teacherService.coursesByTeacher(teacherId);
      res.send(data);
    }
  } catch (error) {}
}

module.exports = { teachersController, addTeacherController, updatedTeacherController, deleteTeacherController, registerTeacherController, coursesByTeacherController };
