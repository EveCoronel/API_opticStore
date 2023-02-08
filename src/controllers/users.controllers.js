const UsersApi = require("../api/users.api");
const { HTTP_STATUS } = require("../constants/api.constants");
const { successResponse } = require("../utils/formatRes.utils");

const api = new UsersApi();

class UsersController {
  async getUsers(req, res, next) {
    try {
      const users = await api.getUsers();
      const response = successResponse(users);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    const { _id } = req.params;
    if (!_id) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const user = await api.getUserById(_id);
      const response = successResponse(user);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getUserByUsername(req, res, next) {
    const { username } = req.params;
    if (!username) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const user = await api.getUserByUsername(username);
      const response = successResponse(user);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req, res, next) {
    try {
      const newUser = await api.createUser(req.body);
      const response = successResponse(newUser);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    const { _id } = req.params;
    if (!_id) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const deletedUser = await api.deleteUser(_id);
      const response = successResponse(deletedUser);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UsersController();
