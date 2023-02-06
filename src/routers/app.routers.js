const { Router } = require("express");
const router = Router();

const productsRoutes = require("./products/products.routes");
const cartsRoutes = require("./carts/carts.routes");
// const authRoutes = require("./auth/auth.routes");
const messagesRoutes = require("./messages/messages.routes");


router.use("/products", productsRoutes);
router.use("/carts", cartsRoutes);
/* router.use("auth", authRoutes); */
router.use("/messages", messagesRoutes)

module.exports = router;
