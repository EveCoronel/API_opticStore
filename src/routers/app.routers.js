const { Router } = require("express");
const router = Router();

const productsRoutes = require("./products/products.routes");
const cartsRoutes = require("./carts/carts.routes");
// const authRoutes = require("./auth/auth.routes");
const messagesRoutes = require("./messages/messages.routes");
const usersRoutes = require("./users/users.routes");

router.use("/products", productsRoutes);
router.use("/carts", cartsRoutes);
/* router.use("auth", authRoutes); */
router.use("/messages", messagesRoutes);
router.use("/users", usersRoutes);

module.exports = router;
