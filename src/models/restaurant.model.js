import { Schema, model } from "mongoose";

const RestaurantSchema = new Schema(
  {
    name: { type: String, required: true },

    // userId: { type: Schema.Types.ObjectId, required: true, ref: "user"},

    address: { type: String, required: true },

    description: { type: String, required: true },

    contact: { type: String, required: false },

    image: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const RestaurantModel = new model("restaurant", RestaurantSchema);
export default RestaurantModel;
