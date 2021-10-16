import fetch from 'isomorphic-unfetch'

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * @param {function(data):object} callback
 * @param {boolean} [latest=true]  If true returns about latest launch. 
 * @returns {Promise}
 */

export const spaceX = (latest=true, callback) => {
    const fetchspaceX = async () => {
        try {
            if (latest) {
            const data = await fetch("https://api.spacexdata.com/v4/launches/latest")
            const response = await data.json()
            return response
            } else {
                const data = await fetch("https://api.spacexdata.com/v4/launches")
                const response = await data.json()
                return response
            }
        } catch(err) {
            throw new Error(err)
        }
    }
    fetchspaceX().then(data => callback(data))
}