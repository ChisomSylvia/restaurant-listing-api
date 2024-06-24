import RestaurantModel from "../models/restaurant.model.js";

class RestaurantService {
  //to create a new restaurant
  async createRes(restaurant) {
    const newRes = await RestaurantModel.create(restaurant);
    return newRes;
  }

  //to get a specific restaurant details
  async findRes(id) {
    const restaurant = await RestaurantModel.findById(id);
    return restaurant;
  }

  //to get all available restaurants
  async findAllRes() {
    const allRes = await RestaurantModel.find();
    return allRes;
  }
}

export default new RestaurantService();
