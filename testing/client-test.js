const axios = require("axios");

class ApiClient {
  async get(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async post(url, body) {
    try {
      const response = await axios.post(url, body, {
        headers: {
          Accept: "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async put(url, body) {
    try {
      const response = await axios.put(url, body, {
        headers: {
          Accept: "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(url) {
    try {
      const response = await axios.delete(url, {
        headers: {
          Accept: "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ApiClient();
