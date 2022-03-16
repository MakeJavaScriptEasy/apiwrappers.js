import fetch from 'isomorphic-unfetch'
if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

/**
 *
 * @param {boolean} returnDict
 * @returns {Object} if returnDict is true returns the JSON
 * @returns {string} if returnDict is false it just returns the text
 */
export const meowFacts = async (returnDict = false) => {
  const data = await fetch("https://meowfacts.herokuapp.com/");
  const response = await data.json();
  if (returnDict) {
    return response;
  } else {
    return res.data.data[0];
  }
};
