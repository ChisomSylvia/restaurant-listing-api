import RestaurantService from "../services/restaurant.service.js";

class RestaurantController {
  //to create a new restaurant
  async createRes(req, res) {
    const resData = req.body;
    const newRes = await RestaurantService.createRes(resData);
    res.status(201).send({
      success: true,
      message: "Restaurant successfully created",
      newRes,
    });
  }

  //to retrieve a specific restaurant data
  async findRes(req, res) {
    const resId = req.params.id;
    const restaurant = await RestaurantService.findRes(resId);
    res.status(200).send({
      success: true,
      message: "Data retrieved successfully",
      restaurant,
    });
  }

  //to retrieve all restaurants data
  async findAllRes(req, res) {
    const allRes = await RestaurantService.findAllRes();
    res.status(200).send({
      success: true,
      message: "All data retrieved successfully",
      allRes,
    });
  }
}

export default new RestaurantController();
