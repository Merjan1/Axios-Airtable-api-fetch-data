const apiBaseClient = require("./base");

const createRecord = async (tableName, records) => {
  const buffer = records.map((record) => {
    return {
      fields: record,
    };
  });

  const payload = {
    records: buffer,
  };

  try {
    const response = await apiBaseClient.post(`/${tableName}`, payload);

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = createRecord;
