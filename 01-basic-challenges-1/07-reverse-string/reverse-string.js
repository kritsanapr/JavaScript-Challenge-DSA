// function reverseString(str) {
//     const strArray = str.split('');
//     const reversedArray = strArray.reverse();
//     const reversedString = reversedArray.join('');


//     return reversedString;
// }

function reverseString(str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }


    return reversedString;
}

module.exports = reverseString;
