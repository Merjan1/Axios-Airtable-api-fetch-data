# Airtable API Client using Axios

**I don't own the rights for the images links used here, these are for study purposes only.**

**Example code below:**

Is well known that Airtable is a great platform for MVP, software prototyping and a collaborational service often used to create relational databases.

But Airtable API Documentation focuses mainly on the usage on their own JS API Library and CURL. This is a solution for thoso who want to use Axios API instead of using Airtable's JS API Library on web applications.

Limitations: Is not possible to send local images to Airtable using Axios only.

_These example is fetching from an Asset table._

to see the methods required above, just check the code :)

- Get all itens from api:

```javascript
const getAll = require("./apiClient/getAll");

const getAllAssets = async () => {
  try {
    const response = await getAll("/assets");

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

getAllAssets();
```

- Get single item from api:

```javascript
const getOne = require("./apiClient/getOne");

const getSingleAsset = async (recordId) => {
  try {
    const response = await getOne("assets", recordId);

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

const recordId = "recoRdIDHerEPeOpLe";

getSingleAsset(recordId);
```

- Create item:

```javascript
const createRecord = require("./apiClient/post");

const createAsset = async (tableName, records) => {
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

//Creating one record:
const record = [
  {
    //Here you can put all the itens from field object if you want.
    name: "New asset",
    image: [
      {
        url: "https://pbs.twimg.com/profile_images/1346461140/logo_twitter_400x400.jpg",
      },
    ],
    price: 123,
    link: "https://mobile.twitter.com/123testandobr",
  },
];

createAsset(record);

//Creating more than one record:
const records = [
  {
    name: "New Asset 2",
    image: [
      {
        url: "https://pbs.twimg.com/profile_images/1346461140/logo_twitter_400x400.jpg",
      },
    ],
    price: 123,
    link: "https://mobile.twitter.com/123testandobr",
  },
  {
    name: "New Asset 3",
    image: [
      {
        url: "https://pbs.twimg.com/profile_images/1346461140/logo_twitter_400x400.jpg",
      },
    ],
    price: 123,
    link: "https://mobile.twitter.com/123testandobr",
  },
];

createAsset(records);
```

- Update item:

```javascript
const updateRecord = require("./apiClient/patch");

const updateAsset = async (tableName, records) => {
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

//Updating one record:
const record = [
  [
    "recoRdIDHerEPeOpLe",
    {
      name: "Update Asset",
    },
  ],
];

updateAsset(recordId, record);

//Updating more than one record:
const records = [
  [
    "recoRdIDHerEPeOpLe",
    {
      name: "Update Asset 2",
    },
  ],
  [
    "recoRdIDHerEPeOpLe",
    {
      name: "Update Asset 3",
    },
  ],
];
updateAsset(recordId, records);
```

- Delete item:

```javascript
const deleteRecord = require("./apiClient/delete");

const deleteAsset = async (tableName, recordsId) => {
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

//Delete one record:
const recordId = ["recoRdIDHerEPeOpLe"];

deleteAsset(recordId);

//Delete more than one record:
const recordsId = ["recoRdIDHerEPeOpLe", "recoRdIDHerEPeOpLe2"];

deleteAsset(recordsId);
```
