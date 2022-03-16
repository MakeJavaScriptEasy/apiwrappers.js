
/**
 * Sums everything in an array and returns its sum
 * @param {Array} array 
 * @returns {number}
 */

const sum = (array) => {
    let acc = 0;
    array.forEach(element => {
        acc += element;
    });
    return acc
}

/**
 * 
 * @param {number} number 
 * @param {number} divideByNumber 
 * @param {Array} array 
 * @param {boolean} divideArray 
 * @returns {object[][]}
 */
const divide = (number=null, divideByNumber=null, array=null, divideArray=false) => {
    if (divideArray) {
        let answerArray = []
        let remainderArray = [];

        array.forEach((element) => {
            let answer = element / divideByNumber;
            let remainder = element % divideByNumber;
            answerArray.push(answer);
            remainderArray.push(remainder);
        })
        let answerValue = {
            answer: answerArray,
            remainder: remainderArray
        };
        return answerValue

    } else {
        return number / divideByNumber;
    }
}


const multiply = (number=null, multipliedByNumber=null, array=null, multiArray=false) => {
    if (multiArray) {
        let answerArray = [{}];
        array.forEach(ele => {
            let answer = ele * multipliedByNumber;
            answerArray.push(answer);
        })
        return answerArray;
    } else {
        return number * multipliedByNumber;
    }
}

const sub = (number, subtractedBy) => {
    return number - subtractedBy;
}


const roundOff = (number=null,  array=null, roundArray=false) => {
    if (roundArray) {
        let answerArray = [];
        array.forEach(ele => {
            let answer = Math.round(ele);
            answerArray.push(answer);
        })
        return answerArray;
    } else {
        return Math.round(number);
    }
}


export {
    sum,
    divide,
    multiply,
    sub,
    roundOff,

};
