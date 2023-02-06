const MessagesApi = require("../api/messages.api");
const { HTTP_STATUS } = require("../constants/api.constants");
const { successResponse } = require("../utils/formatRes.utils");

const api = new MessagesApi();

class MessagesController {

  async getMessages(req, res, next) {
    try {
      const messages = await api.getMessages();
      const response = successResponse(messages);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getMessagesByUsername(req, res, next) {
    const { username } = req.params;
    if(!username) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `username must be provided it`);
    }
    try {
      const message = await api.getMessagesByUsername(username);
      const response = successResponse(message);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveMessage(req, res, next) {
    try {
      const newMessage = await api.createMessage(req.body);
      const response = successResponse(newMessage);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteMessage(req, res, next) {
    const { _id } = req.params;
    if(!_id) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, `id must be provided it`);
    }
    try {
      const deletedMessage = await api.deleteMessage(_id);
      const response = successResponse(deletedMessage);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new MessagesController();
