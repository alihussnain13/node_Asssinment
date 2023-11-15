const {models} = require("../models")

  //Db operations
  module.exports = {
    getStudent: async () => {
      const students = await models.student.findAll({include: models.user});
      return students;
    },
    addStudent: async(data) => {
      const students = await models.student.create(data);
      console.log(students);
      return students;
    },

    updatedStudent: async (studentId, updateStudentData) => {
      const students = await models.student.findByPk(studentId);
    if (students) {
        students.update(updateStudentData);
    }
    return students;
    },

    deleteStudent: async (studentId) => {
      const students = await models.student.findByPk(studentId);
    if (students) {
        students.destroy();
        return "STUDENT DELETED SUCCESSFULLY";
    }
    return null;
    },

    enrollStudent : async(studentId, courseId) => {
      try {
        const newlyEnrolled = await models.student_course.create({
          studentId,
          courseId
        })
        return newlyEnrolled;
      } catch (error) {
        console.log(error);
      }
    },
    coursesByStudent: async (studentId) => {
      try {
        const coursesByStudent = await models.student.findByPk(studentId, {
          include: [
            {
              model: models.user,
            },
            {
              model: models.course,
              through: models.student_course,
            },
          ],
        });
        if (coursesByStudent) {
          return coursesByStudent;
        } else {
          return "No courses is being enrolled by this student";
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  
   