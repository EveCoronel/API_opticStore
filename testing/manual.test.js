const apiClient = require("./client-test");

// ====== TEST GET =======

const getProducts = async (url = "") => {
  const products = await apiClient.get(
    `http://localhost:8080/api/products/${url}`
  );
  console.log(products);
};

//Test manual traer todos los productos
//getProducts()

//Test manual traer los productos por categoria
//getProducts('/filter/Sunglasses')

//Test manual traer producto por id
//getProducts('/636af3f3103544f1859920a0')

// ====== TEST POST =======

const createProduct = async () => {
  const body = {
    title: "Lentes de sol Tom Ford v3",
    thumbnail: "https://images.unsplash.com/photo-1625589955533-d07bfde3c37c",
    stock: 10,
    price: 4500,
    description: "Lentes de sol de color negro, marca Tom Ford",
    category: "Sunglasses",
  };
  const newProduct = await apiClient.post(
    `http://localhost:8080/api/products/`,
    body
  );
  console.log(newProduct);
};

//Creacion de producto
//createProduct()

// ====== TEST PUT =======

const updateProduct = async (_id) => {
  const body = {
    title: "Lentes de sol Tom Ford v5",
    thumbnail: "https://images.unsplash.com/photo-1625589955533-d07bfde3c37c",
    stock: 10,
    price: 4500,
    description: "Lentes de sol de color negro, marca Tom Ford",
    category: "Glasses",
  };
  const upgradedProduct = await apiClient.put(
    `http://localhost:8080/api/products/${_id}`,
    body
  );
  console.log(upgradedProduct);
};

//Actualizacion de producto
//updateProduct('63e2f98dab4b8df5d82ead97')

// ====== TEST DELETE =======

const deleteProduct = async (_id) => {
  const deletedProduct = await apiClient.delete(
    `http://localhost:8080/api/products/${_id}`
  );
  console.log(deletedProduct);
};

//Borrar producto
//deleteProduct('63e2f98dab4b8df5d82ead97')