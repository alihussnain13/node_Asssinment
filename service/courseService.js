const {models} = require("../models")

  //Db operations
  module.exports = {
    getCourse: async () => {
      const courses = await models.course.findAll();
      return courses;
    },
    addCourse: async(data) => {
      const courses = await models.course.create(data);
      console.log(courses);
      return courses;
    },

    updatedCourse: async (courseId, updateCourseData) => {
      const courses = await models.course.findByPk(courseId);
    if (courses) {
        courses.update(updateCourseData);
    }
    return courses;
    },

    deleteCourse: async (courseId) => {
      const courses = await models.course.findByPk(courseId);
    if (courses) {
        courses.destroy();
        return "COURSE DELETED SUCCESSFULLY";
    }
    return null;
    },
  };
  
//   {include: models.user}