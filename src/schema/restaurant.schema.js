import Joi from "joi";

const createRestaurantSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  description: Joi.string().required(),
  contact: Joi.string().optional(),
  image: Joi.string().optional(),
});

// export default createRestaurantSchema;

export { createRestaurantSchema };