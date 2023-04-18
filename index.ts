/**
 * @todo ADD BLACKLIST ENDPOINTS, addKeyTags Endpoint, bulkUpdateKeyWLScript/updateKeyWLScript Endpoints  
*/

import axios from 'axios'

/**
 * @description The Class for the luaguardAPI and all request functions.
 * @author Antwan#5152 (Discord) | LocalSmail (Github) | antwann (Npm)
*/
class luaguardAPI {

    /**
     * @description Gets your account stats from the LuaGuard API
     * @param {string} body.token - The token for authorization.
     * @returns {Object} - Returns Data from the API.
     */
    GetAccountStats = async function (body: { token: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR GetAccountStats")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR GetAccountStats")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/getAccountStats.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: {
                    token: body.token
                }
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Gets the Key for the defined user from the LuaGuard API
     * @param {string} body.key - The key to be gotten. 
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns Data from the API.
     */

    GetKey = async function (body: { token: string; key: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR GetKey")
        }

        if (!body.key) {
            console.error("MISSING KEY FOR GetKey")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR GetKey")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/getKey.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: {
                    token: body.token,
                    key: body.key
                }
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Deletes the key given/Gotten from the provided Discord ID.
     * @param {string} body.key - The key to be deleted. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns Data from the API.
     */

    DeleteKey = async function (body: { token: string; key: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR DeleteKey")
        }

        if (!body.key) {
            console.error("MISSING KEY FOR DeleteKey")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR DeleteKey")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/deleteKey.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: {
                    token: body.token,
                    key: body.key
                }
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Remove the cooldown from the key given/Remove the cooldown from the key attached to the given Discord ID.
     * @param {string} body.key - The key whoms cooldown will be removed. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns Data from the API.
     */
    RemoveCooldown = async function (body: { token: string; discord_id: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR RemoveCooldown")
        }

        if (!body.discord_id) {
            console.error("MISSING DISCORD ID FOR RemoveCooldown")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR RemoveCooldown")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/removeCooldown.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: {
                    token: body.token,
                    discord_id: body.discord_id
                }
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Check if the given key is on cooldown/If the key attached to the given Discord ID is on cooldown.
     * @param {string} body.key - The key to be checked. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns Data from the API.
     */
    IsOnCooldown = async function (body: { token: string; key: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR IsOnCooldown")
        }

        if (!body.key) {
            console.error("MISSING KEY FOR IsOnCooldown")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR IsOnCooldown")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/isOnCooldown.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: {
                    token: body.token,
                    discord_id: body.key
                }
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Return the Discord Role ID for the Buyer Role.
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns a string with the Buyer Role ID.
     */
    GetBuyerRole = async function (body: { token: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR GetBuyerRole")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR GetBuyerRole")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/getBuyerRole.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: {
                    token: body.token
                }
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Update the Expiration for the given key/Key attached to the given Discord ID.
     * @param {string} body.key - The key whoms cooldown will be removed. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @param {string} optional.expiryHours - (Optional) The amount of time the key will have till expirey.
     * @returns {object} - Returns Data from the API.
     */

    UpdateKeyExpiration  = async function (body: { token: string; key: string; }, optional: { expiryHours: number; }) {

        if (!body) {
            console.error("MISSING BODY FOR UpdateKeyExpiration")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR UpdateKeyExpiration")
        }

        if (!body.key) {
            console.error("MISSING KEY FOR UpdateKeyExpiration")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/updateKeyExpiration.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: body,
                ...optional // checks if option table exists and adds it to table
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Whitelist the given Discord ID and return the Generated Key.
     * @param {string} body.discord_id - The key who will be Whitelisted.
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns the Key Generated for the specific Discord ID.
     */

    WhitelistUser = async function (body: { token: string; discord_id: string; }, optional: {tags?: {}, wl_script_id?: string, trial_hours?: number} = {}) {

        if (!body) {
            console.error("MISSING BODY FOR WhitelistUser")
        }
    
        if (!body.discord_id) {
            console.error("MISSING DISCORD ID FOR WhitelistUser")
        }
    
        if (!body.token) {
            console.error("MISSING TOKEN FOR WhitelistUser")
        }
    
        try {

            return await axios({
                url: 'https://api.luawl.com/whitelistUser.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: body,
                    ...optional // checks if option table exists and adds it to table
            })
    
        } catch (err) {
            console.error(err)
        }

        return
    }
    
    /**
     * @description Redeem the given key and apply it to the given Discord ID.
     * @param {string} body.key - The key to be redeemed.
     * @param {string} body.token - The token for authorization.
     * @param {string} body.discord_id - The user whom the key will be applied to.
     * @returns {object} - Returns Data from the API.
     */
    RedeemKey = async function (body: { token: string; key: string; discord_id: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR RedeemKey")
        }

        if (!body.key) {
            console.error("MISSING KEY FOR RedeemKey")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR RedeemKey")
        }

        if (!body.discord_id) {
            console.error("MISSING DISCORD ID FOR RedeemKey")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/redeemKey.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: body
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Get all keys and data for each key. (Each key will be its own array object.)
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns an Array Object with all keys including data for each key.
     */
    GetAllKeys = async function (body: { token: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR GetAllKeys")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR GetAllKeys")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/getAllKeys.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: body
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Get all scripts on the account. (Each script will be returned with its own array)
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns an Array Object with all keys including data for each key.
     */
    GetAccountScripts = async function (body: { token: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR GetAccountScripts")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR GetAccountScripts")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/getAccountScripts.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: body
            })

        } catch (err) {
            console.error(err)
        }

    }

    /**
     * @description Reset the HWID for the given Key/Given Discord ID
     * @param {string} body.key - The key to be checked. <Key/Discord ID>
     * @param {string} body.token - The token for authorization.
     * @returns {object} - Returns a String: "HWID has been reset. HWID will be set next time they run your script."
     */
    ResetHWID = async function (body: { token: string; key: string; }) {

        if (!body) {
            console.error("MISSING BODY FOR ResetHWID")
        }

        if (!body.key) {
            console.error("MISSING KEY FOR ResetHWID")
        }

        if (!body.token) {
            console.error("MISSING TOKEN FOR ResetHWID")
        }

        try {

            return await axios({
                url: 'https://api.luawl.com/resetHWID.php',
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                data: body
            })

        } catch (err) {
            console.error(err)
        }

    }

}

export {luaguardAPI}