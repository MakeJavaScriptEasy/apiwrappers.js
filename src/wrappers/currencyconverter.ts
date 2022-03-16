import fetch from 'isomorphic-unfetch'
if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * Make sure you get your api key from https://rapidapi.com/fyhao/api/currency-exchange
 * @param {string} rapidApiHost
 * @param {string} rapidApiKey
 * @param {string} from
 * @param {string} to
 * @param {number} amount
 * @returns {string}
 */
export const convertCurrency = async (rapidApiHost: string, rapidApiKey: string, from: string, to: string, amount: number=1): Promise<string> => {
    try {
        const data  = await fetch(`https://currency-exchange.p.rapidapi.com/exchange?to=${to}&from=${from}&q=${amount}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": `${rapidApiHost}`,
            "x-rapidapi-key": `${rapidApiKey}`
        }
        })
        return data.text()
    } catch (err: any) {
        throw new Error(err)
    }
    
}
