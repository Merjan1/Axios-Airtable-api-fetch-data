# Airtable API Client using Axios

**I don't own the rights for the images links used here, these are for study purposes only.**

**Example code below:**

My story on doing this is that I was practicing data fetching using axios. I'm a front-end dev and didn't wanted to go through the process of creating a backend just to practice and didn't wanted to use random apis for that, so I decided to use Airtable, which is a great tool for helping you to get some things done nicely, since it's a cloud collaboration service oftenly used to create relational databases (no, this is not a paid advertisement).
The thing is that airtable documentation focus mainly on fetching data using their js api, which in my case wasn't what I wanted and it was so hard to find online how to fetch data using axios and airtable, because the documentation gets a bit confusing about fetching data outside the use of the api, so I decided to make this visible to anyone that's going through the same struggles as I was.

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

const createAsset = async (data) => {
  try {
    const response = await createRecord("assets", data);

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

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

createAsset(data);
```

- Update item:

```javascript
const updateRecord = require("./apiClient/patch");

const updateAsset = async (recordId, data) => {
  try {
    const response = await updateRecord("assets", recordId, data);

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

const data = {
  name: "Patch!!!!!",
};

const recordId = "recoRdIDHerEPeOpLe";

updateAsset(recordId, data);
```

- Delete item:

```javascript
const deleteRecord = require("./apiClient/delete");

const deleteAsset = async (recordId) => {
  try {
    const response = await deleteRecord("assets", recordId);

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

const recordId = "recoRdIDHerEPeOpLe";

deleteAsset(recordId);
```
