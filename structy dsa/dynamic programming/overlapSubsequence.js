overlap subsequence
Write a function, overlapSubsequence, that takes in two strings as arguments. The function should return the length of the longest overlapping subsequence.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

overlapSubsequence("dogs", "daogt"); // -> 3
overlapSubsequence("xcyats", "criaotsi"); // -> 4
overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5
overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave"); // -> 11
overlapSubsequence(
  "mumblecorebeardleggingsauthenticunicorn",
  "succulentspughumblemeditationlocavore"
); // -> 15

solution -

solution
dynamic programming with memoization
const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
  const key = i + ',' + j;
  if (key in memo) return memo[key];
  
  if (i === str1.length || j === str2.length) return 0;
  
  if (str1[i] === str2[j]) {
    memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
  } else {
    memo[key] = Math.max(
      overlapSubsequence(str1, str2, i + 1, j, memo),
      overlapSubsequence(str1, str2, i, j + 1, memo)
    );
  }
  
  return memo[key];
};
n = length of str1
m = length of str2
Time: O(nm)
Space: O(nm)