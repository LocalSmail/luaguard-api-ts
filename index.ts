import axios from 'axios'
/**
 * Github: https://github.com/LocalSmail/luaguard-api-ts/tree/main
 * NPM: https://www.npmjs.com/package/luaguard-api-ts
*/

/**
 * @description The Class for the luaguardAPI and all request functions.
 * @author Antwan#5152 (Discord) | LocalSmail (Github) | antwannn (Npm)
*/
class luaguardAPI {

    static TokenInputted?: string;

    constructor(token?: string) {
        luaguardAPI.TokenInputted = token;
    }

    /**
     * @description Gets your account stats from the LuaGuard API
     * @param {string} body.token - The token for authorization.
     * @returns {Object} - Returns Data from the API.
     */
    GetAccountStats = async function (body: { token?: string; }): Promise<Object> {
        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR GetAccountStats")
                reject({ "Error": "Missing Body for GetAccountStats" })
            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR GetAccountStats")
                reject({ "Error": "Missing Token for GetAccountStats" })

            }

            try {

                axios.request({
                    url: 'https://api.luawl.com/getAccountStats.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: {
                        token: body.token || luaguardAPI.TokenInputted,
                    }
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                            reject({ "Error": "Issue during Setup of request.", "Message": error.message })
                        }
                        console.log(error.config);
                    })

            } catch (err) {
                console.error(err)
                reject({ "Error": "Some un-accouted for issue occured. Printed to console." })
            }

        })

    }

    /**
     * @description Gets the Key for the defined user from the LuaGuard API
     * @param {string} body.key - The key to be gotten. 
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns Data from the API.
     */

    GetKey = async function (body: { token?: string; key: string; }): Promise<Object> {
        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR GetKey")
                reject({ "Error": 'Insert a body ( {} ).' })
            }

            if (!body.key) {
                console.error("MISSING KEY FOR GetKey")
                reject({ "Error": 'Insert a key.' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR GetKey")
                reject({ "Error": 'Insert a token.' })
            }

            try {

                axios.request({
                    url: 'https://api.luawl.com/getKey.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: {
                        token: body.token || luaguardAPI.TokenInputted,
                        key: body.key
                    }
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })

            } catch (err) {
                console.error("err", err)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }
        }) // eol Promise

    }

    /**
     * @description Deletes the key given/Gotten from the provided Discord ID.
     * @param {string} body.key - The key to be deleted. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns Data from the API.
     */

    DeleteKey = async function (body: { token?: string; key: string; }): Promise<Object> {
        return await new Promise<Object>((resolve, reject) => {

            if (!body) {
                console.error("MISSING BODY FOR DeleteKey")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.key) {
                console.error("MISSING KEY FOR DeleteKey")
                reject({ "Error": 'Insert a key.' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR DeleteKey")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/deleteKey.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: {
                        token: body.token || luaguardAPI.TokenInputted,
                        key: body.key
                    }
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })

    }

    /**
     * @description Remove the cooldown from the key given/Remove the cooldown from the key attached to the given Discord ID.
     * @param {string} body.key - The key whoms cooldown will be removed. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns Data from the API.
     */
    RemoveCooldown = async function (body: { token?: string; discord_id: string; }): Promise<Object> {
        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR RemoveCooldown")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.discord_id) {
                console.error("MISSING DISCORD ID FOR RemoveCooldown")
                reject({ "Error": 'Insert a discord Id.' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR RemoveCooldown")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/removeCooldown.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: {
                        token: body.token,
                        discord_id: body.discord_id
                    }
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })
    }

    /**
     * @description Check if the given key is on cooldown/If the key attached to the given Discord ID is on cooldown.
     * @param {string} body.key - The key to be checked. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns Data from the API.
     */
    IsOnCooldown = async function (body: { token?: string; key: string; }): Promise<Object> {
        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR IsOnCooldown")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.key) {
                console.error("MISSING KEY FOR IsOnCooldown")
                reject({ "Error": 'Insert a key.' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR IsOnCooldown")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/isOnCooldown.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: {
                        token: body.token,
                        discord_id: body.key
                    }
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })

    }

    /**
     * @description Return the Discord Role ID for the Buyer Role.
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns a string with the Buyer Role ID.
     */
    GetBuyerRole = async function (body: { token?: string; }): Promise<Object> {

        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR GetBuyerRole")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR GetBuyerRole")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/getBuyerRole.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: {
                        token: body.token
                    }
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })

    }

    /**
     * @description Update the Expiration for the given key/Key attached to the given Discord ID.
     * @param {string} body.key - The key whoms cooldown will be removed. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @param {string} optional.expiryHours - (Optional) The amount of time the key will have till expirey.
     * @returns {object} - Returns Data from the API.
     */

    UpdateKeyExpiration = async function (body: { token?: string; key: string; }, optional?: { expiryHours: number; }): Promise<Object> {

        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR UpdateKeyExpiration")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.key) {
                console.error("MISSING KEY FOR UpdateKeyExpiration")
                reject({ "Error": 'Insert a discord Id.' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR UpdateKeyExpiration")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/updateKeyExpiration.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: body,
                    ...optional // checks if option table exists and adds it to table
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })

    }

    /**
     * @description Whitelist the given Discord ID and return the Generated Key.
     * @param {string} body.discord_id - The key who will be Whitelisted.
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns the Key Generated for the specific Discord ID.
     */

    WhitelistUser = async function (body: { token?: string; discord_id: string; }, optional?: { tags?: {}, wl_script_id?: string, trial_hours?: number } ): Promise<Object> {


        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR WhitelistUser")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.discord_id) {
                console.error("MISSING DISCORD ID FOR WhitelistUser")
                reject({ "Error": 'Insert a discord Id.' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR WhitelistUser")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/whitelistUser.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: body,
                    ...optional // checks if option table exists and adds it to table
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })

    }

    /**
     * @description Redeem the given key and apply it to the given Discord ID.
     * @param {string} body.key - The key to be redeemed.
     * @param {string} body.token - The token for authorization.
     * @param {string} body.discord_id - The user whom the key will be applied to.
     * @returns {object} - Returns Data from the API.
     */
    RedeemKey = async function (body: { token?: string; key: string; discord_id: string; }): Promise<Object> {

        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR RedeemKey")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.discord_id) {
                console.error("MISSING DISCORD ID FOR RedeemKey")
                reject({ "Error": 'Insert a discord Id.' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR RedeemKey")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/redeemKey.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: body
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })

    }

    /**
     * @description Get all keys and data for each key. (Each key will be its own array object.)
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns an Array Object with all keys including data for each key.
     */
    GetAllKeys = async function (body: { token?: string; }): Promise<Object> {

        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR GetAllKeys")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR GetAllKeys")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/getAllKeys.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: body
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })

    }

    /**
     * @description Get all scripts on the account. (Each script will be returned with its own array)
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns an Array Object with all keys including data for each key.
     */
    GetAccountScripts = async function (body: { token?: string; }): Promise<Object> {

        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR GetAccountScripts")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR GetAccountScripts")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/getAccountScripts.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: body
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })

    }

    /**
     * @description Reset the HWID for the given Key/Given Discord ID
     * @param {string} body.key - The key to be checked. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns a String: "HWID has been reset. HWID will be set next time they run your script."
     */
    ResetHWID = async function (body: { token?: string; key: string; }): Promise<Object> {


        return await new Promise<Object>((resolve, reject) => {
            if (!body) {
                console.error("MISSING BODY FOR ResetHWID")
                reject({ "Error": 'Insert a body ( {} ).' })

            }

            if (!body.key) {
                console.error("MISSING DISCORD ID FOR ResetHWID")
                reject({ "Error": 'Insert a key.' })

            }

            if (!body.token && !luaguardAPI.TokenInputted) {
                console.error("MISSING TOKEN FOR ResetHWID")
                reject({ "Error": 'Insert a token.' })
            }

            try {
                axios.request({
                    url: 'https://api.luawl.com/resetHWID.php',
                    headers: { 'Content-Type': 'application/json' },
                    method: "POST",
                    data: body
                })

                    .then(function (data) {
                        resolve(data.data)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('! ERROR !')
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            reject({ "Error": `Server Responded with Status Code: ${error.respond.status}\nWe recommend you check your data or if the services are up.`, "Data": `${JSON.stringify(error.response.data)}`})
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance ofofof
                            // http.ClientRequest in node.js
                            console.log('! ERROR !')
                            console.log(error.request);
                            reject({ 'Error': 'Data was sent but server did not respond.' })
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('! ERROR !')
                            console.log(error.message);
                        }
                        console.log(error.config);
                    })
            } catch (error) {
                console.log(error)
                reject({ "Error": "Some un-accounted for issue occured. Printed to console." })
            }

        })

    }

}

export { luaguardAPI }
