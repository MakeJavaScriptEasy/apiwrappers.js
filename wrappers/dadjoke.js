import fetch from 'node-fetch'
if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * 
 * @param {boolean} returnDict 
 * @returns {Object} if returnDict is true returns the JSON
 * @returns {string} if returnDict is false it just returns the text
 */
export const dadJoke = async (returnDict = false) => {
    const data = await fetch("https://icanhazdadjoke.com/slack");
    const response = await data.json()
    if (returnDict) {
        return response
    } else {
        return response.attachments[0].text;
    }
}

