const CartsApi = require("../api/carts.api");
const { HTTP_STATUS } = require("../constants/api.constants");
const { successResponse } = require("../utils/formatRes.utils");

const api = new CartsApi();

class CartsController {
  async getCarts(req, res, next) {
    try {
      const carts = await api.getAll();
      const response = successResponse(carts);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getCartById(req, res, next) {
    const { _id } = req.params;
    if (!_id) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const cart = await api.getById(_id);
      const response = successResponse(cart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveCart(req, res, next) {
    try {
      const newCart = await api.createCart(req.body);
      const response = successResponse(newCart);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateCart(req, res, next) {
    const { _id, idProd } = req.params;
    if (!_id || !idProd) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id and idProd must be provided it`);
    }
    try {
      const updateCart = await api.addProduct(_id, idProd);
      const response = successResponse(updateCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async emptyCart(req, res, next) {
    const { _id } = req.params;
    if(!_id) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const emptyCart = await api.emptyCart(_id);
      const response = successResponse(emptyCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getProductsInCart(req, res, next) {
    const { _id } = req.params;
    if(!_id) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const productsInCart = await api.getProductsInCart(_id);
      const response = successResponse(productsInCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteProductById(req, res, next) {
    const { _id, idProd } = req.params;
    if (!_id || !idProd) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id and idProd must be provided it`);
    }
    try {
      const productsInCart = await api.deleteProductById(_id, idProd);
      const response = successResponse(productsInCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartsController();
