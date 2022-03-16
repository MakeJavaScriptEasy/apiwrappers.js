import fetch from 'isomorphic-unfetch'
import {quoteData} from "../types";

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}
/**
 *
 * @param {boolean} returnDict
 * @returns {Object} if returnDict is true returns the JSON
 * @returns {string} if returnDict is false it just returns the text
 */

export const getQuote = async (returnDict = false): Promise<quoteData | string> => {
  const apiUrl =
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const answer = JSON.parse(
      (await (await fetch(apiUrl)).text()).replace(/\\/g, "")
    );

    if (!returnDict) {
      return answer.quoteText;
    } else {
      return answer.quoteText;
    }
  } catch (err: any) {
    throw new Error(err);
  }
};
// getQuote();
