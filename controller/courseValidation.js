const joi = require("joi");

module.exports={
    addCourse: joi.object().keys({
        courseName: joi.string().required(),
        courseDescription: joi.string().required(),
        // studentId: joi.number().required(),
        // teacherId: joi.number().required(),
    }),
    deleteCourse: joi.object().keys({
        courseId: joi.number(),
    }),
    updatedCourse: joi.object().keys({
        courseId: joi.number().required(),
        courseName: joi.string(),
        courseDescription: joi.string(),
    }),
}

