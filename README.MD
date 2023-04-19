### Luaguard API
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

const api = new luaguardAPI(); // creates a new luaguardAPI class instance

async function t() {
    const res = await api.GetAccountStats({ token: "<YOURAPITOKENHERE>" }) // sends request

    console.log(JSON.stringify(await res?.data)) // print data returned
}

t() // runs function
```

### Todo

Add Blacklisted Enpoints
Add updateKeyWLScript, bulkUpdateKeyWLScript, addKeyTags Endpoints
Be more transparent on data that is returned in jsdoc
