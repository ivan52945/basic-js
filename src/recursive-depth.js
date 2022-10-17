const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		let deptLoc = 1;
		for (let value of arr) {
			if (Array.isArray(value)) {
				let depRes = this.calculateDepth(value);
				if (depRes + 1 > deptLoc) deptLoc = depRes + 1;
			}
		}
		return deptLoc;
	}
}


module.exports = {
	DepthCalculator
};
