import fetch from 'node-fetch'
import random from 'fast-helpers.js/random.js'

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

export const  memeGenerator = async (returnDict=false) => {
    const data = await fetch("https://api.imgflip.com/get_memes")
    const response = await data.json()

    const randomNumber = random.randint(response.data.memes.length)
    if (!returnDict) {
        return response.data.memes[randomNumber].url;
    } else {
        return response;
    }
}
