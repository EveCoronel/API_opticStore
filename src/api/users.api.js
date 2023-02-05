const envConfig = require("../config/env.config");
const { getDAOS } = require("../models/dao/daos.factory");

class UsersApi {
  constructor() {
    this.UsersDao = getDAOS(envConfig.DATASOURCE).usersDao;
  }
}

module.exports = UsersApi;
