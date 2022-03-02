const apiBaseClient = require("./base");

const getOne = async (tableName, recordId) => {
  try {
    const response = await apiBaseClient.get(`/${tableName}/${recordId}`);

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = getOne;
