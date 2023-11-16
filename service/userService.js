const { models } = require("../models");
const bcrypt = require("bcryptjs");
//Db operations
module.exports = {
  getUser: async () => {
    const users = await models.user.findAll();
    return users;
  },
  addUser: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const users = await models.user.create(data);
    console.log(users);
    return users;
  },

  updatedUser: async (userId, updateUserData) => {
    const users = await models.user.findByPk(userId);
    if (users) {
      users.update(updateUserData);
    }
    return users;
  },

  deleteUser: async (userId) => {
    const users = await models.user.findByPk(userId);
    if (users) {
      users.destroy();
      return "USER DELETED SUCCESSFULLY";
    }
    return null;
  },
};
