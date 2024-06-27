import UserModel from "../models/user.model.js";


class UserService {
  // create new user
  async createUser(user) {
    const newUser = await UserModel.create(user);
    return newUser;
  }

  // get a user
  async getUser(query) {
    const user = await UserModel.findOne(query);
    return user;
  }

  // // get all users
  // async getUsers() {
  //   const users = await UserModel.find();
  //   return users;
  // }
}

// module.exports = new UserService();
export default new UserService();
