/**
 * Random object which has many methods.
 */
const random = {
    /**
     * Enter any number in till and it will return it
     * @param {number} till 
     * @returns {number}
     */
    randint: till => {
        return Math.floor(Math.random() * till)
    },

    /**
     * Enter an array and it will randomly pick any item from it
     * @param {Array} array 
     * @returns {any}
     */
    choice: array => {
        let index = Math.floor(Math.random() * array.length);
        return array[index];
    }


}

export {random};

