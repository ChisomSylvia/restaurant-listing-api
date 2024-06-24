import { Router } from "express";
const router = Router();
import restaurantRouter from "./restaurant.route.js"


router.use("/api/v1/restaurant/", restaurantRouter)


export default router;