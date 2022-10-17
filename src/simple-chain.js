const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chainArray: [],
	getLength() {
		return this.chainArray.length;
	},
	addLink(value) {
		if (value === undefined) value = "";
		else if (value === null) value = "null"
		this.chainArray.push(value);
		return this;
	},
	removeLink(position) {
		if (Number.isInteger(position) == false || position < 1 || position > this.chainArray.length) {
			this.chainArray = [];
			throw new Error('You can\'t remove incorrect link!');
		}
		position -= 1;

		this.chainArray.splice(position, 1);

		return this;
	},
	reverseChain() {
		this.chainArray = this.chainArray.reverse();
		return this;
	},
	finishChain() {
		const array = this.chainArray;
		this.chainArray = [];
		return "( " + array.join(" )~~( ") + " )";

	}
};




module.exports = {
	chainMaker
};
