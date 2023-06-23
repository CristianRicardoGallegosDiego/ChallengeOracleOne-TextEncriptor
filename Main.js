/**
 * @fileOverview Encrypt and Decrypt a text.
 *
 * @version 1.0
 * @author Cristian Gallegos @polar_byte
 * @copyright cristianga2002@ciencias.unam.mx
 */


/**
 * @description Array of key mapping for encryption and decryption.
 *
 * Each element in the array is a subarray containing two values:
 * - The first value represents the original key.
 * - The second value represents the encrypted key.
 *
 * @type {Array<Array<string>>}
 */
const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

/**
 * @description The message to be encrypted or decrypted.
 *
 * This variable stores the text will be processed for encryption or decryption operations.
 * @type {string}
 */
var message = null;

/**
 * @description This function encrypts the text entered by the user and displays the result
 * in the output field.
 *
 * @returns {void} No return value.
 */
function encryptButton() {
    let inputText = document.querySelector(".input-text");
    if (inputText.value === null || inputText.value === "") {
        resetOutput();
    } else {
        message = document.querySelector(".output-text");
        message.value = encrypt(inputText.value);
        inputText.value = "";
        cleanOutput();
    }
}

/**
 * @description Encrypts a text using specific keys defined in an array.
 *
 * @param {string} textToEncrypt - The text to encrypt.
 * @returns {string} The encrypted text.
 */
function encrypt(textToEncrypt) {
    let encryptText = textToEncrypt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (let i = 0; i < keys.length; i++) {
        if (encryptText.includes(keys[i][0])) {
            encryptText = encryptText.replaceAll(keys[i][0], keys[i][1]);
        }
    }
    return encryptText;
}

/**
 * @description This function decrypts the text entered by the user and displays the result
 * in the output field.
 *
 * @returns {void} No return value.
 */
function decryptButton() {
    let inputText = document.querySelector(".input-text");
    if (inputText.value === null || inputText.value === "") {
        resetOutput();
    } else {
        message = document.querySelector(".output-text");
        message.value = decrypt(inputText.value);
        inputText.value = "";
        cleanOutput();
    }
}

/**
 * @description Decrypts a text using specific keys defined in an array.
 *
 * @param {string} textToDecrypt - The text to decrypt.
 * @returns {string} The decrypted text.
 */
function decrypt(textToDecrypt) {
    let decryptText = textToDecrypt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (let i = 0; i < keys.length; i++) {
        if (decryptText.includes(keys[i][1])) {
            decryptText = decryptText.replaceAll(keys[i][1], keys[i][0]);
        }
    }
    return decryptText;
}

/**
 * @description Copy the content of the output field to the device's clipboard.
 *
 * @returns {void} No return value.
 */
function copyButton () {
    if (message !== null && message.value !== null) {
        navigator.clipboard.writeText(message.value);
    }
}

/**
 * @description Reset the output field to its initial state.
 *
 * This function resets the styles and content of the output field to its default state.
 *
 * @returns {void} No return value.
 */
function resetOutput() {
    let message = document.querySelector('.output-text');
    message.style.background = "white url('images/gears.gif') no-repeat center 10%";
    message.style.boxShadow = "0px 24px 32px -8px rgba(0, 0, 0, 0.08)";
    message.style.backgroundSize = "60%";
    message.style.resize = "none";
    message.style.textAlign = "center";
    message.style.border = "none";
    message.style.borderRadius = "24px";

    let messageOne = document.querySelector('.message-one');
    let messageTwo = document.querySelector('.message-two');
    messageOne.style.display = "initial";
    messageTwo.style.display = "initial";

    message = document.querySelector(".output-text");
    message.value = null;
}

/**
 * @description Cleans the output field.
 *
 * This function removes the styles and hides the output messages in the corresponding field.
 *
 * @returns {void} No return value.
 */
function cleanOutput(){
    message.style.backgroundImage = "none";
    let messageOne = document.querySelector('.message-one');
    let messageTwo = document.querySelector('.message-two');
    messageOne.style.display = "none";
    messageTwo.style.display = "none";
}