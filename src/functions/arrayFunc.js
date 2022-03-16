
/**
 * @param {Array} array
 * @returns {string}
 * */
const arrayToString = (array) => {
    let emptyStyring = ""
    array.forEach(element => {
        emptyStyring += ` ${element}`
    });
    return emptyStyring
}

/**
 * Changes Object to Array
 * @param {object} object 
 * @returns {any[][]}
 */

const objectToArray = (object) => {
    const em = []
    for (let i=0; Object.keys(object).length > i; i++) {
        let array = [Object.keys(object)[i], Object.values(object)[i]]
        em.push(array)
    }
    return em
}


export { arrayToString, objectToArray };