const UserModel = require("../models/userModel");

class AuthService {
  static async registerUser(firstName, lastName, dob, email, phone, password) {
    try {
      const createUser = new UserModel({
        firstName,
        lastName,
        dob,
        email,
        phone,
        password,
      });
      return await createUser.save();
    } catch (error) {
      throw error;
    }
  }
  static async checkUser(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
