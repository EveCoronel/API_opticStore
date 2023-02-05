const UserMongoDao = require("./users/usersDao.mongo");
const ProductMongoDao = require("./products/productsDao.mongo");
const CartMongoDao = require("./carts/cartsDao.mongo");

const getDAOS = (type) => {
  let productsDao;
  let cartsDao;
  let usersDao;

  switch (type.toLowerCase()) {
    case "mongo":
      productsDao = new ProductMongoDao();
      cartsDao = new CartMongoDao();
      usersDao = new UserMongoDao();
      break;
    default:
      throw new Error("Invalid data source");
  }
  return {
    productsDao,
    cartsDao,
    usersDao,
  };
};

module.exports = {
  getDAOS,
};
