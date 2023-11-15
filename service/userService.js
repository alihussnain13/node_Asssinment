  const {models} = require("../models")
  //Db operations
  module.exports = {
    getUser: async () => {
      const users = await models.user.findAll();
      return users;
    },
    addUser: async(data) => {
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
  