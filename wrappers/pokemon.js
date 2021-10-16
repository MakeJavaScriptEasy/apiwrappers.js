import fetch from 'isomorphic-unfetch'

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}


/**
 * Requesting Pokemons from the API
 * @param {string} pokemon
 * @param {function(data):any} callback - callback for getting the value of the promise. it accepts one param `data`
 * @returns {object}
 */

export const getPokemon = async (pokemon) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    const response = await data.json();
    return response
} 