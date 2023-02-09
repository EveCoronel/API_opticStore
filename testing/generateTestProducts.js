const { faker } = require("@faker-js/faker");

const generateTestProduct = () => {
  return {
    title: faker.commerce.productName(),
    thumbnail: faker.image.animals(400, 400, true),
    stock: Math.floor(Math.random() * 120) + 1,
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
  };
};

module.exports = generateTestProduct;
