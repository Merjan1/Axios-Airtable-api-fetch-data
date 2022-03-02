const apiBaseClient = require("./base");

const updateRecord = async (tableName, recordId, data) => {
  const payload = {
    records: [
      {
        id: recordId,
        fields: data,
      },
    ],
  };

  try {
    const response = await apiBaseClient.patch(`/${tableName}`, payload);

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = updateRecord;
