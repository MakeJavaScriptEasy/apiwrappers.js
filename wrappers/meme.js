import fetch from 'isomorphic-unfetch'
import { random } from 'fast-helpers.js';

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * 
 * @param {boolean} returnDict 
 * @returns {Object} if returnDict is true returns the JSON
 * @returns {string} if returnDict is false it just returns the URL
 */
export const memeGenerator = async (returnDict = false) => {
    const data = await fetch("https://api.imgflip.com/get_memes")
    const response = await data.json()

    const randomNumber = random.randint(response.data.memes.length)
    if (!returnDict) {
        return response.data.memes[randomNumber].url;
    } else {
        return response;
    }
}

console.log(memeGenerator())