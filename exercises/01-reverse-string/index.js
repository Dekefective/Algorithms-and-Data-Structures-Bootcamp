// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1:
// function reverse(string) {
//   return string.split("").reverse().join("");
// }

// Solution 2:
// function reverse(string) {
//   let reversed = "";
//   for (let character of string) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }

// * Solution 3:
function reverse(string) {
  return string.split("").reduce((rev, char) => char + rev, "");
}

reverse("Hello");

module.exports = reverse;
