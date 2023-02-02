const express = require("express");
const cors = require("cors");
const envConfig = require("./config/env.config");
const apiRoutes = require("./routers/app.routers");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", apiRoutes);

const server = app.listen(+envConfig.PORT, () => {
  console.log(`Using ${envConfig.DATASOURCE} as data source`);
  console.log(`Server is up an running on port ${PORT}`);
});

server.on("error", (err) => {
  console.log(`Error with server: ${err.message}`);
});
