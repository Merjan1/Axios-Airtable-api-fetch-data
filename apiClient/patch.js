const apiBaseClient = require("./base");

const updateRecord = async (tableName, records) => {
  const buffer = records.map((record) => {
    return {
      id: record[0],
      fields: record[1],
    };
  });

  const payload = {
    records: buffer,
  };

  try {
    const response = await apiBaseClient.patch(`/${tableName}`, payload);

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = updateRecord;
