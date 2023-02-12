const supertest = require("supertest");
const expect = require("chai").expect;
const app = require("../src/server");
const mongoose = require("mongoose");
const envConfig = require("../src/config/env.config");
const generateTestProduct = require("../testing/generateTestProducts");

let server;
let request;

describe("Test API REST Full", () => {
  before(async function () {
    await connectToDB();
    server = await startServer();
    request = supertest(`http://localhost:${server.address().port}`);
  });

  describe("== METODO GET ==", () => {
    it("Debería devolver un array con items y status 200", async () => {
      const response = await request.get("/api/products");
      expect(response.status).to.eql(200);
      expect(response.body.data).to.be.a("array");
    });

    it("Debería devolver un item especifico y status 200", async () => {
      const response = await request.get(
        "/api/products/636af446103544f1859920b4"
      );
      expect(response.status).to.eql(200);
      expect(response.body.data).to.be.a("object");
      expect(response.body.data).to.deep.equal({
        _id: "636af446103544f1859920b4",
        title: "Lentes leopardo",
        thumbnail:
          "https://images.unsplash.com/photo-1574258495973-f010dfbb5371",
        stock: 10,
        price: 1899,
        description:
          "Lentes de mitad leopardo en acrilico y mitad en bordes finos color marrón",
      });
    });

    it("Debería devolver un item con la categoria Sunglasses", async () => {
      const category = "Sunglasses";
      const response = await request.get(`/api/products/filter/${category}`);
      expect(response.status).to.eql(200);
      expect(response.body.data[0])
        .to.be.an("object")
        .and.to.have.deep.property("category")
        .that.equals(category);
    });
  });

  describe("== METODO POST ==", () => {
    it("Debería crear y devolver un producto con determinadas keys", async () => {
      const productPayload = generateTestProduct();
      const response = await request.post("/api/products").send(productPayload);
      expect(response.status).to.eql(201);
      const newProduct = response.body.data;
      expect(newProduct).to.include.keys(
        "category",
        "description",
        "price",
        "stock",
        "thumbnail",
        "title"
      );
    });
  });

  describe("== METODO PUT ==", () => {
    it("Debería actualizar un producto", async () => {
      const productPayload = generateTestProduct();
      const response = await request
        .put("/api/products/63e971e6227e8e19cf44cf02")
        .send(productPayload);
      expect(response.status).to.eql(200);
      expect(response.body.data)
        .to.be.a("object")
        .and.to.have.deep.property("modifiedCount")
        .that.equals(1);
    });
  });

  describe("== METODO DELETE ==", () => {
    it("Debería crear un producto y eliminarlo", async () => {
      const productPayload = generateTestProduct();
      const added = await request.post("/api/products").send(productPayload);
      const response = await request.delete(
        `/api/products/${added.body.data._id}`
      );
      expect(response.status).to.eql(200);
      expect(response.body.data)
        .to.be.a("object")
        .and.to.have.deep.property("deletedCount")
        .that.equals(1);
    });
  });

  after(function () {
    mongoose.disconnect();
    server?.close();
  });
});

const connectToDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://ecommerce:${envConfig.DB_PASSWORD}@cluster0.hjesg.mongodb.net/test?retryWrites=true&w=majority`
    );
    console.log("Connected to db");
  } catch (err) {
    throw new Error(`Error connecting to db ${err}`);
  }
};

const startServer = () => {
  return new Promise((resolve, reject) => {
    const PORT = 0;
    const server = app.listen(PORT, () => {
      console.log(`Server listening on PORT ${server.address().port}`);
      resolve(server);
    });
    server.on("error", (err) => {
      console.log(`Error on server ${err}`);
      reject(err);
    });
  });
};
