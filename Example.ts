import { luaguardAPI } from "./index"; // imports

// IF there is no token set here and non defined inside the 'token' argument for whatever function your using it will print an error and return nothing.
const api = new luaguardAPI('<TOKEN>'); // <OPTIONAL> Sets Api token to the class so no need to constntly define.

async function FindKey() {
    // sends request
    await api.GetAccountStats({}).catch((err) => {
        console.log("EEEEE", err)
    })
    .then((data) => {
        console.log(data)
    })
}

FindKey()
