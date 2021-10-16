import fetch from 'isomorphic-unfetch'
import { random } from 'fast-helpers.js';
if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}
/**
 * @param {boolean} returnDict if false returns random model
 * @returns {Object}
 * @returns {string}
 * 
*/
export const getAppleModels = async (returnDict) => {
    const data = await fetch("https://appleinformationapi.herokuapp.com/api")
    const response = await data.json()
    const randomNumber = random.randint(response[1].models.length)
    if (returnDict) {
        return response[1].models
    } else {
        return response[1].models[randomNumber]
    }
}

