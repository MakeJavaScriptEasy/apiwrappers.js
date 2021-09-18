import fetch from 'node-fetch'

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * @param {boolean} returnDict
 * @param {string} rapidApiKey
 * @param {string} rapidApiHost
 * @param {string} word
 * @param {function(data):any} callback
 * @returns {(object|string[])}
 */


export const urbanDictionaryGetMeaning = (rapidApiKey, rapidApiHost, word, returnDict=false, callback) => {
    const urbanDictionaryGetMeaningFetch = async () => {
        let em = []
        const data = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": `${rapidApiHost}`,
            "x-rapidapi-key": `${rapidApiKey}`
        }})
        const response = await data.json();
        if (returnDict) {
            response.list.forEach(element => {
                let meaning = element.definition;
                em.push(meaning);
                return em;
            });
        } else {
            return response;
        }
    }

    urbanDictionaryGetMeaningFetch().then(data => callback(data))

}