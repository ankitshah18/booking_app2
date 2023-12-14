const bcrypt = require("bcrypt");
const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to backend from router");
  } catch (error) {
    console.log(error);
  }
};

//REGISTER LOGIC
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashPass = bcrypt.hashSync(password, 10);

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      password: hashPass,
    });

    res.status(201).json({
      message: "User Registered Successfully",
      userCreated,
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

//lOGIN LOGIC
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      return res.status(200).json({
        message: "Login Successfull",
        userId: userExist._id.toString(),
      });
    } else {
      return res.statu(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register, login };
