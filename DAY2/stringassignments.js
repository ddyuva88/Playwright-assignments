//Example 1:

let str = `This is my string assignment`;

let array = str.split(/\s+/);

let lastWord = array[array.length - 1];

console.log(`The last word is '${lastWord}' of the length ${lastWord.length}`);

//Example 2:

let sentence = `    fly me   to   the moon   `;

//Trimmed to remove the leading and trailing spaces
let trimSentence = sentence.trim();
console.log(`Trimmed sentence:'${trimSentence}'`);

//splitting the words and finding the last word and it's length
let words = trimSentence.split(/\s+/);
let lastWordInSentence = words[words.length - 1];

console.log(`The words in the sentence: ${words}`)

console.log(`The last word in the sentence is '${lastWordInSentence}' of the length ${lastWordInSentence.length}`);

//Example 3:

function isAnagram(string1, string2) {
    // Remove spaces and convert all letters to the same case
    string1 = string1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    string2 = string2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Sort the characters in both strings
    const sortedStr1 = string1.split('').sort().join('');
    const sortedStr2 = string2.split('').sort().join('');

    // Compare the sorted strings
    // Return true if they are the same, otherwise false
    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram('listen', 'silent'));  
console.log(isAnagram('dinesh', ' Hsenid'));  
console.log(isAnagram('kumar   ', 'Ramuk')); 
