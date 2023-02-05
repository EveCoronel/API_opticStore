const ProductsApi = require("../api/products.api");
const { HTTP_STATUS } = require("../constants/api.constants");
const { successResponse } = require("../utils/formatRes.utils");

const api = new ProductsApi();

class ProductsController {

  async getProducts(req, res, next) {
    try {
      const products = await api.getProducts();
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    const { _id } = req.params;
    if(!_id) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const product = await api.getProductById(_id);
      const response = successResponse(product);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveProduct(req, res, next) {
    try {
      const newproduct = await api.createProduct(req.body);
      const response = successResponse(newproduct);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    const { _id } = req.params;
    if(!_id) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const updateproduct = await api.updateProduct(_id, req.body);
      const response = successResponse(updateproduct);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    const { _id } = req.params;
    if(!_id) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const deletedproduct = await api.deleteProduct(_id);
      const response = successResponse(deletedproduct);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getProductsByCategory(req, res, next) {
    const { category } = req.params;
    if(!category) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `Category must be provided it`);
    }
    try {
      const products = await api.getProducts(category);
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductsController();
