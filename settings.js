require("dotenv").config();

const baseURL = process.env.BASE_URL;

const apiKey = process.env.API_KEY;

module.exports = {
  baseURL,
  apiKey,
};
