const Router = require("express").Router;

const productController = require("../controllers/product-controller");
const ProductRouter = Router();

ProductRouter.get("/", productController.getProducts);

module.exports = ProductRouter;