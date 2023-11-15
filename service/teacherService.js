const {models} = require("../models")

  //Db operations
  module.exports = {
    getTeacher: async () => {
      const teachers = await models.teacher.findAll({include: models.user});
      return teachers;
    },
    addTeacher: async(data) => {
      const teachers = await models.teacher.create(data);
      console.log(teachers);
      return teachers;
    },

    updatedTeacher: async (teacherId, updateTeacherData) => {
      const teachers = await models.teacher.findByPk(teacherId);
    if (teachers) {
        teachers.update(updateTeacherData);
    }
    return teachers;
    },

    deleteTeacher: async (teacherId) => {
      const teachers = await models.teacher.findByPk(teacherId);
    if (teachers) {
        teachers.destroy();
        return "TEACHER DELETED SUCCESSFULLY";
    }
    return null;
    },

    registerTeacher : async(teacherId, courseId) => {
      try {
        const newlyRegistered = await models.teacher_course.create({
          teacherId,
          courseId
        })
        return newlyRegistered;
      } catch (error) {
        console.log(error);
      }
    },
    coursesByTeacher: async (teacherId) => {
      try {
        const coursesByTeacher = await models.teacher.findByPk(teacherId, {
          include: [
            {
              model: models.user,
            },
            {
              model: models.course,
              through: models.teacher_course,
            },
          ],
        });
        if (coursesByTeacher) {
          return coursesByTeacher;
        } else {
          return "No courses is being registered by this teacher";
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  
   