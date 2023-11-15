const joi = require("joi");

module.exports={
    addStudent: joi.object().keys({
        major: joi.string().required(),
        userID: joi.number().required(),
    }),
    deleteStudent: joi.object().keys({
        studentId: joi.number(),
    }),
    updatedStudent: joi.object().keys({
        studentId: joi.number().required(),
        major: joi.string(),
    }),
    enrollStudent: joi.object().keys({
        studentId: joi.number().required(),
        courseId: joi.number().required(),
    }),
    coursesByStudent: joi.object().keys({
        id: joi.number().required(),
    }),
}