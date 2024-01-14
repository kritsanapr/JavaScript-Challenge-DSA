// function isPalindrome(str) {
// str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return str === str.split('').reverse().join('');
// }

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(str);
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;
