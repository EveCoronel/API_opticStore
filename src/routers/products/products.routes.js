const { Router } = require("express");
const router = Router();

const productsController = require("../../controllers/products.controller");

router.get("/", productsController.getProducts);
router.get("/:_id", productsController.getProductById);
router.get("/filter/:category", productsController.getProductsByCategory);
router.post("/", productsController.saveProduct);
router.put("/:_id", productsController.updateProduct);
router.delete("/:_id", productsController.deleteProduct);

module.exports = router;
