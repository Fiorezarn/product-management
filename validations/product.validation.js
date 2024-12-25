const Joi = require("joi");
const {
  errorClientResponse,
  errorServerResponse,
} = require("@/helpers/response.helpers");
const { Product } = require("@/models");

const productValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    stock: Joi.number().required(),
    price: Joi.number().required(),
  });

  const validationError = schema.validate(req.body).error;
  if (validationError) {
    return errorClientResponse(res, validationError.details[0].message);
  }
  next();
};

const checkDuplicate = async (req, res, next) => {
  const { name } = req.body;

  try {
    const product = await Product.findOne({
      where: { name: name },
    });

    if (product) {
      return errorClientResponse(res, `Product with ${name} already exists`);
    }
    next();
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = { productValidation, checkDuplicate };
