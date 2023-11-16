const config = require("../../config");
const { models } = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let tokens = [];
const generateToken = (data) => {
  console.log(data);
  return jwt.sign(data, config.jwtSecret);
};
module.exports = {
  verifyToken: (req, res, next) => {
    let token = req.headers["authorization"];
    token = token && token.split(" ")[1];
    if (!token) {
      return res.sendStatus(401);
    } else {
      if (!tokens.includes(token)) {
        return res.sendStatus(401);
      }
      jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    let user = await models.user.findOne({ where: { email: email } });
    console.log(user);
    user = user.dataValues;
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken({ id: user.id });
      tokens.push(token);
      return res.json({ token: token });
    }
  },
};
