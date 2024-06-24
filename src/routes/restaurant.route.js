import { Router } from "express";
const router = Router();
import RestaurantController from "../controllers/restaurant.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { createRestaurantSchema } from "../schema/restaurant.schema.js"

router.post("/", validate(createRestaurantSchema), RestaurantController.createRes);

router.get("/", RestaurantController.findAllRes);
router.get("/:id", RestaurantController.findRes);


export default router;