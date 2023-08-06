lexical order
Write a function, lexicalOrder, that takes in 2 words and an alphabet string as an argument. The function should return true if the first word should appear before the second word if lexically-ordered according to the given alphabet order. If the second word should appear first, then return false.

Note that the alphabet string may be any arbitrary string.

Intuitively, Lexical Order is like "dictionary" order:

You can assume that all characters are lowercase a-z.

You can assume that the alphabet contains all 26 letters.

const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("apple", "dock", alphabet); // -> true
const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("apple", "ample", alphabet); // -> false
const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("app", "application", alphabet); // -> true
const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("backs", "backdoor", alphabet); // -> false
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
lexicalOrder("zoo", "dinner", alphabet); // -> true
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
lexicalOrder("leaper", "leap", alphabet); // -> false
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
lexicalOrder("backs", "backdoor", alphabet); // -> true
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
lexicalOrder("semper", "semper", alphabet); // -> true

solution 

solution
const lexicalOrder = (word1, word2, alphabet) => {
  const length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length; i += 1) {
    const char1 = word1[i];
    const char2 = word2[i];
    const value1 = alphabet.indexOf(char1);
    const value2 = alphabet.indexOf(char2);
    if (value1 < value2) {
      return true;
    } else if (value1 > value2) {
      return false;
    }
  }
  return true;
};
n = length of shorter string
Time: O(n)
Space: O(1)