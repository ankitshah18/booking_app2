const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, required: true },
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
