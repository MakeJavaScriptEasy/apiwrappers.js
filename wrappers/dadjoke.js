import fetch from 'node-fetch'
if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

export const dadJoke = async (returnDict=false) => {
    const data = await fetch("https://icanhazdadjoke.com/slack");
    const response = await data.json()
    if (returnDict) {
        return response
    } else {
        return response.attachments[0].text;
    }
}

