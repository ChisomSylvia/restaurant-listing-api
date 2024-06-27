import { Router } from "express";
const router = Router();
import restaurantRouter from "./restaurant.route.js";
import userRouter from "./user.route.js";

router.use("/api/v1/restaurant/", restaurantRouter, userRouter);

export default router;
