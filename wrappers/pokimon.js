import fetch from 'node-fetch'
if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}


/**
 * Requesting Pokimons from the API
 * @param {string} pokimon
 * @param {function(data):any} callback - callback for getting the value of the promise. it accepts one param `data`
 * @returns {object}
 */

export const getPokimon = (pokimon, callback) => {
    const pokimonReqeust = async (pokimon) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimon.toLowerCase()}`);
    const response = await data.json();
    return response
    }
    pokimonReqeust(pokimon)
    .then(data => callback(data))
}