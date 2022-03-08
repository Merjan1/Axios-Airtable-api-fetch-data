const apiBaseClient = require("./base");

const deleteRecord = async (tableName, recordsId) => {
  const buffer = recordsId.map((recordId, index) => {
    return {
      [`records[${index}]`]: recordId,
    };
  });

  const options = {
    params: Object.assign({}, ...buffer),
  };

  try {
    const response = await apiBaseClient.delete(`/${tableName}`, options);

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = deleteRecord;
