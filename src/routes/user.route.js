import UserController from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();
import validate from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../schema/user.schema.js";


router.post("/register", validate(registerSchema), UserController.register);
router.post("/login", validate(loginSchema), UserController.login);
// router.post("/logout", UserController.logout);


export default router;
