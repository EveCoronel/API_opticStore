const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routers/app.routers")
const errorMiddleware = require("./middlewares/error.middleware");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api", apiRoutes);

app.use(errorMiddleware);

module.exports = app;