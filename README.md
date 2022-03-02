# Airtable API Client using Axios

**I don't own the rights for the images links used here, these are for study purposes only.**

**Example code below:**

_In these example I'm fetching from an Asset table._

```javascript
const getAll = require("./apiClient/getAll");
const getOne = require("./apiClient/getOne");
const createRecord = require("./apiClient/post");
const updateRecord = require("./apiClient/patch");
const deleteRecord = require("./apiClient/delete");
```

to see the methods required above, just check the code :)

- Get all itens from api:

```javascript
const getAllAssets = async () => {
  const response = await getAll("assets");

  console.log(response.data);
};

getAllAssets();
```

- Get single item from api:

```javascript
const getSingleAsset = async () => {
  try {
    const response = await getOne("assets", "recoRdIDHerEPeOpLe");

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

getSingleAsset();
```

- Create item:

```javascript
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

createAsset();
```

- Update item:

```javascript
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

updateAsset();
```

- Delete item:

```javascript
const recordId = "recoRdIDHerEPeOpLe";

const deletarItem = async () => {
  try {
    const response = await deleteRecord("assets", recordId);

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

deletarItem();
```
