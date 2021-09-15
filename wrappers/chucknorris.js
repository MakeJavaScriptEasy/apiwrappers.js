import fetch from 'node-fetch'
if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * 
 * @param {boolean} returnDict 
 * @param {*} category 
 * @returns {Object} if returnDict is true returns the JSON
 * @returns {string} if returnDict is false it just returns the text
 */
export const getChuckNorrisJoke = async (returnDict = false, category = null) => {
    const catagories = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food"
        , "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"];
    if (!category) {
        const data = await fetch("https://api.chucknorris.io/jokes/random");
        const response = await data.json();
        if (!returnDict) {
            return response.value;
        } else {
            return response;
        }
    } else {
        if (category in catagories) {
            const data = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
            const response = await data.json();
            if (!returnDict) {
                return response.value;
            } else {
                return response;
            }
        } else {
            return catagories;
        }
    }
}

