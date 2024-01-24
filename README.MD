# Archieved
This package will no longer recieve updates.


### Luaguard API

[You can get the package here!](https://www.npmjs.com/package/luaguard-api-ts)

Welcome to the Luaguard API.

Here you can interact with the Luaguard API without needing to handle the requests your self.

---

<b>Please note that you need to own Luaguard Tier 2 to use the api!</b><br>
<a href="https://luawl.com" style="font-weight: bolder">If you dont own Luaguard or Tier 2 then click me to buy!</a>


# Getting started

Installing:<br>NPM: `npm install luaguard-api-ts` <br>YARN: `yarn install luaguard-api-ts`

Importing: <br> `import { luaguardAPI } from 'luagaurd-api-ts';`
<i>Importing might differ depending on tsconfig.json</i>


<br>

## Making requests with the package

Now that we've imported the package we can now start actually making requests.
<br>
All the request types follow the same type of format when using them. That way it is easy for people to quickly send requests out to the API and get data.

<br>

Here I will show an example on how to send a request for your account stats.
<i>Please keep in mind that the `token` will always be your api token. <b>DO NOT SHARE THIS WITH ANYONE</b></i>
<br>
```typescript
/* 
The code may differ depending on your tsconfig.json
Import the luaguardAPI class from the luaguard-api-ts module.
const { luaguardAPI } = require('luaguard-api-ts');
*/

import { luaguardAPI } from "luaguard-api-ts"; // imports

// IF there is no token set here and non defined inside the 'token' argument for whatever function your using it will print an error and return nothing.
const api = new luaguardAPI('<TOKEN>'); // <OPTIONAL> Sets Api token to the class so no need to constntly define.

//
// NO NEED FOR try{} catch() BECAUSE WE DO IT FOR YOU!
//

async function GetData() {
    // sends request
    await api.GetAccountStats({}).catch((err) => {
        console.log("Error", err)
    })
    .then((data) => {
        console.log(data)
    })
}

GetData()

```

### Todo
--Be more transparent on data that is returned in jsdoc
