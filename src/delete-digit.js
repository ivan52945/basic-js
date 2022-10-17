const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  n = (n+"");

  function deleteNumString(n, i) {
    n = n.split("");
    n[i] = ""; 
    return n.join("");
  }

  for (let i = 0; i < n.length-1; i++) { 
    if (+n[i] > +n[i + 1]) return +deleteNumString(n, i + 1);
    else if (+n[i] < +n[i + 1]) return +deleteNumString(n, i);
  }
  return +deleteNumString(n, 0);
}

module.exports = {
  deleteDigit
};
