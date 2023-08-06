detect dictionary
Write a function, detectDictionary, that takes in a dictionary of words and an alphabet string. The function should return a boolean indicating whether or not all words of the dictionary are lexically-ordered according to the alphabet.

You can assume that all characters are lowercase a-z.

You can assume that the alphabet contains all 26 letters.

const dictionary = ["zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> true
const dictionary = ["zoo", "tack", "tick", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> false
const dictionary = ["zoos", "zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> false
const dictionary = ["miles", "milestone", "proper", "process", "goal"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> true
const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> true
const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal", "apple"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> false

solution 

solution
const detectDictionary = (dictionary, alphabet) => {
  for (let i = 0; i < dictionary.length - 1; i += 1) {
    const current = dictionary[i];
    const next = dictionary[i + 1];
    if (!lexicalOrder(current, next, alphabet)) return false;
  }
  
  return true;
};

const lexicalOrder = (word1, word2, alphabet) => {
  const length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length; i += 1) {
    const char1 = word1[i];
    const char2 = word2[i];
    const value1 = char1 === undefined ? -Infinity: alphabet.indexOf(char1);
    const value2 = char2 === undefined ? -Infinity: alphabet.indexOf(char2);
    if (value1 < value2) {
      return true;
    } else if (value1 > value2) {
      return false;
    }
  }
  return true;
};
n = # of words in dictionary
k = # length of longest word
Time: O(nk)
Space: O(1)