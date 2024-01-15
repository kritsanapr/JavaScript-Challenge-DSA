function removeDuplicates(arr) {
    const uniqueValue = []

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueValue.includes(arr[i])) {
            uniqueValue.push(arr[i])
        }
    }

    return uniqueValue
}



module.exports = removeDuplicates;
