const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }
  encrypt(source, key) {
    if (typeof source != "string" || typeof key != "string") throw new Error("Incorrect arguments!");

    let message = source.split("").map((value) => value.toUpperCase());
    key = key.split("").map((value) => value.toUpperCase());
    

    let count = 0;
    for (let i = 0; i < source.length; i++) { 
      if (message[i].charCodeAt(0) > 64 && message[i].charCodeAt(0) < 91) { 
        message[i] = String.fromCharCode((message[i].charCodeAt(0) - 65 + key[count].charCodeAt(0) - 65) % 26 + 65);
        count = (count + 1) % key.length;
      }
    }
    return (this.direction) ? message.join("") : message.reverse().join("");

  }
  decrypt(message, key) {
    if (typeof message != "string" || typeof key != "string") throw new Error("Incorrect arguments!");

    let source = message.split("").map((value) => value.toUpperCase());

    key = key.split("").map((value) => value.toUpperCase());
    
    let count = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) > 64 && message[i].charCodeAt(0) < 91) {
        source[i] = String.fromCharCode((message[i].charCodeAt(0) - 65 + (26 - key[count].charCodeAt(0) + 65)) % 26 + 65);
        count = (count + 1) % key.length;
      }
    }
    return (this.direction) ? source.join("") : source.reverse().join("");

  }
}

module.exports = {
  VigenereCipheringMachine
};
