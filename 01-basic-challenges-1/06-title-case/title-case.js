function titleCase(str) {
    const wordArray = str.toLowerCase().split(' ');

    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
    }

    console.log(wordArray.join(' '))
    return wordArray.join(' ');
}

module.exports = titleCase;
