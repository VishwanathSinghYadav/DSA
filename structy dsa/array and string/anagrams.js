anagrams
Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('paper', 'reapa'); // -> false
anagrams('elbow', 'below'); // -> true
anagrams('tax', 'taxi'); // -> false
anagrams('taxi', 'tax'); // -> false
anagrams('night', 'thing'); // -> true
anagrams('abbc', 'aabc'); // -> false
anagrams('po', 'popp'); // -> false
anagrams('pp', 'oo') // -> false

solution-

const anagrams = (s1, s2) => {
    const count = {};
    for (let char of s1) {
      if (!(char in count)) {
        count[char] = 0;
      }
      count[char] += 1;
    }
    
    for (let char of s2) {
      if (count[char] === undefined) {
        return false;
      } else {
        count[char] -= 1;
      }
    }
    
    for (let char in count) {
      if (count[char] !== 0) {
        return false;
      }
    }
    
    return true;
  };