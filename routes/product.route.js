const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("@/controllers/product.controller");
const {
  productValidation,
  checkDuplicate,
} = require("@/validations/product.validation");

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post("/", productValidation, checkDuplicate, createProduct);
router.put("/:id", checkDuplicate, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
