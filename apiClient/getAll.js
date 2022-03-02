const apiBaseClient = require("./base");

const getAll = (tableName) => {
  try {
    const response = apiBaseClient.get(`/${tableName}`);

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = getAll;
