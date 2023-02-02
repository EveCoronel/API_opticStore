const { HTTP_STATUS } = require("../constants/api.constants");
const { successResponse } = require("../utils/formatRes.utils");

class ProductsController {
  constructor() {
    this.api = new ProductsApi();
  }

  async getProducts(req, res, next) {
    try {
      const products = await this.api.getAll();
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    const { id } = req.params;
    try {
      const product = await this.api.getById(id);
      const response = successResponse(product);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveProduct(req, res, next) {
    try {
      const newproduct = await this.api.save(req.body);
      const response = successResponse(newproduct);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    const { id } = req.params;
    try {
      const updateproduct = await this.api.update(id, req.body);
      const response = successResponse(updateproduct);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    const { id } = req.params;
    try {
      const deletedproduct = await this.api.delete(id);
      const response = successResponse(deletedproduct);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getProductsByCategory(req, res, next) {
    const { category } = req.params;
    try {
      const products = await this.api.getByCategory(category);
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductsController();
