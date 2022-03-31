const Router = require("express").Router;

const productController = require("../controllers/product-controller");
const ProductRouter = Router();

ProductRouter.get("/product", productController.getProducts);
ProductRouter.get("/product/:productId", productController.getProductDetails);
ProductRouter.post("/product", productController.createProduct);
ProductRouter.patch("/product/:productId", productController.updateProduct);
ProductRouter.delete("/product/:productId", productController.deleteProduct);

module.exports = ProductRouter;
