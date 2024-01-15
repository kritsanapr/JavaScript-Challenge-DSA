function countVowels(word) {
    const transformedWord = word.toLowerCase();
    let count = 0;

    for (let i = 0; i < transformedWord.length; i++) {
        const char = transformedWord[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }

    return count;
}

module.exports = countVowels;
