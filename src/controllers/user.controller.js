import UserService from "../services/user.service.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserController {
  // register user
  async register(req, res) {
    // const userData = req.body;
    const { _id, name, email, password } = req.body;

    try {
      //check if user already exists
      const exists = await UserService.getUser({ email });
      if (exists) {
        return res.status(400).send({
          success: false,
          message: "You are already registered, Please login!",
        });
      }

      //hashing the user's password
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);

      //add new user to the register
      const newUser = await UserService.createUser({
        _id: _id, //since mongodb creates an id for us, do we need to include it here?
        name: name,
        email: email,
        password: encryptedPassword,
      });

      //to save new user? is this line important?
      const user = await newUser.save();

      //to get a new token ??why must we get a token or cookie
      const token = jwt.sign(
        {
          _id: user._id, //use id not _id sometimes but be consistent
          email: user.email,
        },
        process.env.MY_SECRET,
        { expiresIn: 3 * 24 * 60 * 60 * 1000 }
      );

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });

      return res.status(201).send({
        success: true,
        message: "User successfully registered",
        user,
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: "error detected",
      });
    }
  }


  // login user
  async login(req, res) {
    // const userData = req.body;
    const { email, password } = req.body;

    try {
      //check if email entered === registered email
      const regUser = await UserService.getUser({
        email: email,
      });

      if (!regUser) {
        return res.status(400).send({
          success: false,
          message: "invalid email",
        });
      }

      //check if password entered === pasword registered
      const isValidPassword = await bcrypt.compare(password, regUser.password);

      if (!isValidPassword) {
        return res.status(400).send({
          success: false,
          message: "invalid password",
        });
      }

      //get token ?? why must we include email??
      const token = jwt.sign(
        {
          _id: regUser._id,
          email: regUser.email,
        },
       process.env.MY_SECRET,
        { expiresIn: 3 * 24 * 60 * 60 * 1000 }
      );

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).send({
        success: true,
        message: "User successfully logged in",
        regUser,
      });
      
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: "error detected",
      });
    }
  }


  // // logout user
  // async logout(req, res) {
  //   res.cookie("token", "", {
  //     httpOnly: true,
  //     maxAge: new Date(0),
  //   });

  //   return res.status(200).send({
  //     success: true,
  //     message: "User successfully logged out", //why are we not defining a user const here??
  //   });
  // }
}



export default new UserController();
