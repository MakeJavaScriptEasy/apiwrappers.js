if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}


export const randomFox = async (returnDict) => {
    const data = await fetch("https://randomfox.ca/floof/?ref=apilist.fun")
    const response = await data.json()
    if(!returnDict) {
        return response.image
    } else {
        return response
    }
}


export const randomCat = async (returnDict=false) => {
    const data = await fetch("https://aws.random.cat/meow")
    const response = await data.json()
    if (!returnDict) {
        return response.file
    } else {
        return response
    }
}
