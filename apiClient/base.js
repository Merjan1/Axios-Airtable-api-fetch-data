const axios = require("axios");
const { baseURL, apiKey } = require("../settings");

const apiBaseClient = axios.create({
  baseURL: baseURL,
  headers: { Authorization: `Bearer ${apiKey}` },
});

module.exports = apiBaseClient;
