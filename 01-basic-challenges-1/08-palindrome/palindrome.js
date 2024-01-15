// Solution 1
// function isPalindrome(str) {
// str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return str === str.split('').reverse().join('');
// }


// Solution 2
// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     console.log(str);
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// Solution 3
// Function to check if a string is a palindrome.
function isPalindrome(str) {
    const formattedStr = removeAlphaNumeric(str.toLowerCase());
    const reversedStr = reverseString(formattedStr);

    return formattedStr === reversedStr;
}

// Function to remove all non-alpha-numeric from a string.
function removeAlphaNumeric(str) {
    let formattedStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (isAlphaNumeric(char)) {
            formattedStr += char;
        }
    }

    return formattedStr;
}

/**
 * Checks if a character is alphanumeric.
 * @param {string} char - The character to check.
 * @returns {boolean} - True if the character is alphanumeric, false otherwise.
 */
function isAlphaNumeric(char) { // ตรวจสอบว่าเป็นตัวอักษรหรือตัวเลขหรือไม่
    const code = char.charCodeAt(0);
    return (
        code >= 48 && code <= 57 || // numeric (0-9)
        code >= 97 && code <= 122 // lower alpha (a-z)
    )
}

// ทำการ reverse string ด้วย for of loop
function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

module.exports = isPalindrome;
