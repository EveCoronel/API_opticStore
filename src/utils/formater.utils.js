const moment = require("moment");

const formatMessage = (username, text) => {
  return {
    username,
    text,
    time: moment().format("DD/MM/YYYY - HH:mm"),
  };
};

const formatUser = (name) => {
  return {
    name: name,
  };
};

module.exports = {
  formatMessage,
  formatUser,
};
