import fetch from 'isomorphic-unfetch'
import {spaceXLaunchData} from "../types";

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * @param {function(data):object} callback
 * @param {boolean} [latest=true]  If true returns about latest launch. 
 * @returns {Promise}
 */

export const spaceX = async (latest=true, callback): Promise<spaceXLaunchData> => {
    try {
        if (latest) {
        const data = await fetch("https://api.spacexdata.com/v4/launches/latest")
            return await data.json()
        } else {
            const data = await fetch("https://api.spacexdata.com/v4/launches")
            return await data.json()
        }
    } catch(err) {
        throw new Error(err)
    }
    
}