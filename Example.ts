// The example on how to use the luaguard api which is shown inside the README.MD
import { luaguardAPI } from "luaguard-api-ts"; // imports

const api = new luaguardAPI(); // creates a new luaguardAPI class instance

async function t() {
    const res = await api.GetAccountStats({ token: "<YOURAPITOKENHERE>" }) // sends request

    console.log(JSON.stringify(await res?.data)) // print data returned
}

t() // runs function
