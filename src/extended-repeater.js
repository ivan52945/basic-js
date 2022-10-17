const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here

	options.repeatTimes = (options.repeatTimes) ? options.repeatTimes : 1;
	options.separator = (options.separator) ? options.separator : "+";
	if (options.addition === false) options.addition = "false";
	if (options.addition === null) options.addition = "null";
	options.addition = (options.addition) ? options.addition : "";

	options.additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
	options.additionSeparator = (options.additionSeparator) ? options.additionSeparator : "|";

	const addition = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);

	return new Array(options.repeatTimes).fill(str + addition).join(options.separator);

}

module.exports = {
	repeater
};
