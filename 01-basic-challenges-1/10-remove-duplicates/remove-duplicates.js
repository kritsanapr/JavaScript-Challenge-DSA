// Solution 1
// function removeDuplicates(arr) {
//     const uniqueValue = []

//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueValue.includes(arr[i])) {
//             uniqueValue.push(arr[i])
//         }
//     }

//     return uniqueValue
// }

// Solution 2
function removeDuplicates(arr) {
    const uniqueValue = new Set(arr)
    // return [...uniqueValue]
    return Array.from(uniqueValue)
}

module.exports = removeDuplicates;
