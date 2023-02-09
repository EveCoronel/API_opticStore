const envConfig = require("./config/env.config");
const logger = require("./logger/logger");
const MongoRepository = require("./models/Repository/mongo.repository");
const app = require("./server");

const server = app.listen(+envConfig.PORT || 8080, () => {
  MongoRepository.connect().then(() => {
    logger.info("Connected to DB!");
  });
  logger.info(`Using ${envConfig.DATASOURCE} as data source`);
  logger.info(`Server is up an running on port ${envConfig.PORT || 8080}`);
});

server.on("error", (err) => {
  logger.info(`Error with server: ${err.message}`);
});
