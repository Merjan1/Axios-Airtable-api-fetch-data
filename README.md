# Airtable API Client using Axios

**I don't own the rights for the images links used here, these are for study purposes only.**

**Example code below:**

_In these example I'm fetching from an Asset table._

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
```

- Get single item from api:

```javascript
const getOne = require("./apiClient/getOne");

const getSingleAsset = async () => {
  try {
    const response = await getOne("assets", "recoRdIDHerEPeOpLe");

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
```

- Create item:

```javascript
const createRecord = require("./apiClient/post");

const data = {
  //Here you can put all the itens from field object if you want.
  name: "New asset",
  image: [
    {
      url: "https://pbs.twimg.com/profile_images/1346461140/logo_twitter_400x400.jpg",
    },
  ],
  price: 123,
  link: "https://mobile.twitter.com/123testandobr",
};

const createAsset = async () => {
  try {
    const response = await createRecord("assets", data);

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
```

- Update item:

```javascript
const updateRecord = require("./apiClient/patch");

const dataPatch = {
  name: "Patch!!!!!",
};

const recordId = "recoRdIDHerEPeOpLe";

const updateAsset = async () => {
  try {
    const response = await updateRecord("assets", recordId, dataPatch);

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
```

- Delete item:

```javascript
const deleteRecord = require("./apiClient/delete");

const recordId = "recoRdIDHerEPeOpLe";

const deletarItem = async () => {
  try {
    const response = await deleteRecord("assets", recordId);

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
```
