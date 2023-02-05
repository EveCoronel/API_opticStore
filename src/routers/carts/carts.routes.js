const { Router } = require("express");
const router = Router();

const cartsController = require("../../controllers/carts.controller");

router.get("/", cartsController.getCarts);
router.get("/:_id/products", cartsController.getProductsInCart);
router.post("/", cartsController.saveCart);
router.post("/:_id/products/:idProd", cartsController.updateCart);
router.delete("/:_id", cartsController.emptyCart);
router.delete("/:_id/products/:idProd", cartsController.deleteProductById);

module.exports = router;
