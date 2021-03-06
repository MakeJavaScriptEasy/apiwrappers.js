import fetch from 'isomorphic-unfetch'

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * @param {boolean} returnDict
 * @param {string} rapidApiKey
 * @param {string} rapidApiHost
 * @param {string} word
 * @param {function(data):any} callback
 * @returns {object|string[]}
 */


export const urbanDictionaryGetMeaning = (rapidApiKey: string, rapidApiHost: string, word: string, returnDict: boolean = false, callback: (data: any) => any) => {
    const urbanDictionaryGetMeaningFetch = async () => {
        let em: string[] = []
        const data = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": `${rapidApiHost}`,
            "x-rapidapi-key": `${rapidApiKey}`
        }})
        const response = await data.json();
        if (returnDict) {
            response.list.forEach((element: { definition: string; }) => {
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