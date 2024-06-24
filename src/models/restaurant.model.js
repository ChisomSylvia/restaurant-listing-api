import { Schema, model } from "mongoose";

const RestaurantSchema = new Schema(
  {
    name: { type: String, required: true },

    address: { type: String, required: true },

    description: { type: String, required: true },

    contact: { type: Number, required: false },

    image: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const RestaurantModel = new model("restaurant", RestaurantSchema);
export default RestaurantModel;
