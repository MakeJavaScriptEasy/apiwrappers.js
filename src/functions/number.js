/**
 * Range gives you an array which has all the numbers from start param to end param.
 * @param {number} start 
 * @param {number} end 
 * @returns {object}
 */
const range = (start=0, end) => {
    let arr = [];
    while (start != end) {
        arr.push(start)
        start++
    };
    return arr
}

/**
 * Returns Generator Object for odd numbers
 * @param {number} till 
 * @returns {Generator}
 */

function* oddGenerator(till) {
    let returnedArray = range(0, till);
    for (let number of returnedArray) {
        if (number % 2 !== 0) {
            yield number
        }
    }
}

/**
 * Returns Generator Object for even numbers
 * @param {number} till 
 * @returns {Generator}
 */

function* evenGenerator(till) {
    let returnedArray = range(0, till) 
    for (let number of returnedArray) {
        if (number % 2 === 0) {
            yield number;
        }
    }
}


export { range, oddGenerator, evenGenerator };