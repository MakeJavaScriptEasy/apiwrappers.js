/**
 * Random object which has many methods.
 */
export const random = {
    /**
     * Enter any number in till and it will return it
     * @param {number} till 
     * @returns {number}
     */
    randint: (till: number) => {
        return Math.floor(Math.random() * till)
    },

    /**
     * Enter an array and it will randomly pick any item from it
     * @param {Array} array 
     * @returns {any}
     */
    choice: (array: any[]) => {
        let index = Math.floor(Math.random() * array.length);
        return array[index];
    }
}
