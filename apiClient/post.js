const apiBaseClient = require("./base");

const createRecord = async (tableName, data) => {
  const payload = {
    records: [
      {
        fields: data,
      },
    ],
  };

  try {
    const response = await apiBaseClient.post(`/${tableName}`, payload);

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = createRecord;
