const apiBaseClient = require("./base");

const deleteRecord = async (tableName, recordId) => {
  const options = {
    params: {
      "records[]": recordId,
    },
  };

  try {
    const response = await apiBaseClient.delete(`/${tableName}`, options);

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = deleteRecord;
