const { Router } = require("express");
const router = Router();

const cartsController = require("../../controllers/carts.controller");

router.get("/", cartsController.getCarts);
router.get("/:id/products", cartsController.getProductsInCart);
router.post("/", cartsController.saveCart);
router.post("/:id/products/:id_prod", cartsController.updateCart);
router.delete("/:id", cartsController.emptyCart);
router.delete("/:id/products/:id_prod", cartsController.deleteProductById);

module.exports = router;