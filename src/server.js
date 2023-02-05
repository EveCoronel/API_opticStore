const express = require("express");
const cors = require("cors");
const envConfig = require("./config/env.config");
const apiRoutes = require("./routers/app.routers")
const logger = require("./logger/logger");
const errorMiddleware = require("./middlewares/error.middleware");
const MongoRepository = require("./models/Repository/mongo.repository");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", apiRoutes);

const server = app.listen(+envConfig.PORT, () => {
  MongoRepository.connect().then(() => {
    logger.info("Connected to DB!");
  });
  logger.info(`Using ${envConfig.DATASOURCE} as data source`);
  logger.info(`Server is up an running on port ${envConfig.PORT}`);
});

server.on("error", (err) => {
  logger.info(`Error with server: ${err.message}`);
});

app.use(errorMiddleware);
