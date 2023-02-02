const { Router } = require("express");
const router = Router();

const productsRoutes = require("./products/products.routes");
const cartsRoutes = require("./carts/carts.routes");
const authRoutes = require("./auth/auth.routes");

router.use("products", productsRoutes);
router.use("carts", cartsRoutes);
router.use("auth", authRoutes);

module.exports = router;