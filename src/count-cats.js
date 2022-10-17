const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(backyard) {
	return backyard.reduce(function (acc, array) {
		return acc += array.reduce(function (acc_in, string) {
			return acc_in += ((string === "^^") ? 1 : 0);
		}, 0);
	}, 0);
}

module.exports = {
	countCats
};

