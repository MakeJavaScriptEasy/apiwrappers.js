import fetch from 'isomorphic-unfetch'
import {CatData, DogData, foxData} from "../types";
if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * 
 * @param {boolean} returnDict 
 * @returns {Object} if returnDict is true returns the JSON
 * @returns {string} if returnDict is false it just returns the Image
 */
export const randomFox = async (returnDict: boolean):  Promise<foxData | string> => {
    const data = await fetch("https://randomfox.ca/floof/?ref=apilist.fun")
    const response = await data.json()
    if (!returnDict) {
        return response.image
    } else {
        return response
    }
}

/**
 * 
 * @param {boolean} returnDict 
 * @returns {Object} if returnDict is true returns the JSON
 * @returns {string} if returnDict is false it just returns the Image
 */
export const randomCat = async (returnDict = false): Promise<CatData | string> => {
    const data = await fetch("https://aws.random.cat/meow")
    const response = await data.json()
    if (!returnDict) {
        return response.file
    } else {
        return response
    }
}

export const randomDog = async (returnDict = false): Promise<DogData | string> => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random")
    const response = await data.json()
    if (!returnDict) {
        return response.message
    } else {
        return response
    }
}
