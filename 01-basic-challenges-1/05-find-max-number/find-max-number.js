// function findMaxNumber(arr) {
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }

//     return max;
// }

function findMaxNumber(arr) {
    return Math.max(...arr);
}

module.exports = findMaxNumber;
