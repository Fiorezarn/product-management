const {
  successResponseData,
  errorServerResponse,
  errorClientResponse,
  successResponse,
} = require("@/helpers/response.helpers");
const { Product, Series } = require("@/models");
const { getPagingData, getPagination } = require("@/utils/pagination.utils");
const { Op } = require("sequelize");

const getProduct = async (req, res) => {
  const { page = 1, limit = 10, search } = req.query;
  const { limit: limitValue, offset: offsetValue } = getPagination(page, limit);
  let whereConditions = { deletedAt: null };
  try {
    if (search) {
      whereConditions.name = { [Op.like]: `%${search}%` };
    }
    const Products = await Product.findAndCountAll({
      include: [{ attributes: ["name"], model: Series, as: "series" }],
      where: whereConditions,
      limit: limitValue,
      offset: offsetValue,
      distinct: true,
    });
    const response = getPagingData(Products, page, limit);
    return res.status(200).send(response);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const findProductById = (id) => {
  try {
    const product = Product.findOne({
      where: { product_id: id, deletedAt: null },
    });
    return product;
  } catch (error) {
    console.error(error.message);
    throw new Error();
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await findProductById(id);
    if (!product) {
      return errorClientResponse(res, "Product Not Found!");
    }
    return successResponseData(
      res,
      `Success Get Product with ID ${id}`,
      product
    );
  } catch (error) {
    return errorClientResponse(res, error.message);
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const newProduct = await Product.create({
      name: name,
      description: description,
      price: price,
      stock: stock,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return successResponseData(res, "Success Create New Product!", newProduct);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const updateProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const { id } = req.params;
  try {
    const product = await findProductById(id);
    if (!product) {
      return errorClientResponse(res, "Product Not Found!");
    }
    await Product.update(
      {
        name: name,
        description: description,
        price: price,
        stock: stock,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { where: { product_id: id } }
    );
    return successResponse(res, `Success Update Product with ID ${id}`);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await findProductById(id);
    if (!product) {
      return errorClientResponse(res, "Product Not Found!");
    }
    await Product.update(
      {
        deletedAt: new Date(),
      },
      {
        where: { product_id: id },
      }
    );
    return successResponse(res, `Success Delete Product with ID ${id}`);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
