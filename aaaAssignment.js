const { error } = require("node:console");
const test = require("node:test");

function greet(name) {
    return name || "Guest";
}

test ('returns Guest when the name is empty', () => {

// Arrange
const name = "" ;

// Act
const result = greet(name);

// Assert
expect(result).toBe("Guest");
});

function toggle(value) {
    return !value;
}

test ('toggles boolean value', () => {

// Arrange
const input = 0;

// Act
const result = toggle(value);

// Assert
expect(result).toBe(true);
}) ;

function addItem(arr, item) {
    arr.push(item);
    return arr;
}

test ('adds item to array', () => {

// Arrange
const arr = [5, 6, 7, 8, 9];

// Act
const result = addItem(arr, 3);

// Assert
expect(result).toEqual([5, 6, 7, 8, 9, 3]);
}) ;

function removeItem(arr, item) {
    return arr.filter(i => i !== item);
}

test ('removes item to array', () => {

// Arrange
const arr = [5, 6, 7, 8, 9];

// Act
const result = removeItem(arr, 8);

// Assert
expect(result).toBe([5, 6, 7, 9]);
}) ;

function isValidPassword(password) {
    return password.length >= 6;
}

test ('returns true for valid password lenght', () => {

// Arrange
const password = Pass123;

// Act
const result = isValidPassword(password);

// Assert
expect(result).toBe(true);
}) ;

// -------------Stage 3: Real QA Thinking

//---------------Password 

function isValidPassword(password) {
    return password.length >= 6;
}

test ('returns false for invalid password length', () => {

// Arrange
const password = 123;

// Act
const result = isValidPassword(password);

// Assert
expect(result).toBe(false);
}) ;

function isValidPassword(password) {
    return password.length >= 6 || password.length == 10;
}

test ('returns false for invalid password length', () => {

// Arrange
const password = 123;

// Act
const result = isValidPassword(password);

// Assert
expect(result).toBe(false);
}) ;

function isValidPassword(password) {
    return password.length >= 6 || password.length == 10;
}

test ('returns false for invalid password length', () => {

// Arrange
const password = Pass123456789;

// Act
const result = isValidPassword(password);

// Assert
expect(result).toBe(false);
}) ;

function isValidPassword(password) {
    return password.length >= 6;
}

test ('returns true if password has a capital letter', () => {

// Arrange
const password = Pass123;

// Act
const result = isValidPassword(password);

// Assert
expect(result).toBe(true);
}) ;

function isValidPassword(password) {
    return password.length >= 6;
}

test ('returns false if password has a capital letter', () => {

// Arrange
const password = pass123;

// Act
const result = isValidPassword(password);

// Assert
expect(result).toBe(false);
}) ;

//--------------------containsWord

function containsWord(sentence, word) {
    return sentence.includes(word);
}

test ('returns true if the sentence has that word', () => {
  
// Arrange
const sentence = "This is QA assignment";

// Act
const result = containsWord(sentence, "QA");

// Assert
expect(result).toBe(true);
}) ;

function containsWord(sentence, word) {
    return sentence.includes(word);
}

test ('returns false if the sentence does not have that word', () => {
  
// Arrange
const sentence = "This is QA assignment";

// Act
const result = containsWord(sentence, "Hello");

// Assert
expect(result).toBe(false);
}) ;

function containsWord(sentence, word) {
    return sentence.includes(word);
}

test ('returns false if the sentence has no capital letter on the first word', () => {
  
// Arrange
const sentence = "this is QA assignment";

// Act
const result = containsWord(sentence, "this");

// Assert
expect(result).toBe(false);
}) ;

function containsWord(sentence, word) {
    return sentence.includes(word);
}

test ('returns true if the sentence has a capital letter on the first word ', () => {
  
// Arrange
const sentence = "This is QA assignment";

// Act
const result = containsWord(sentence, "This");

// Assert
expect(result).toBe(true);
}) ;

function containsWord(sentence, word) {
    return sentence.includes(word);
}

test ('returns false if the word has a different casing ', () => {
  
// Arrange
const sentence = "This is QA assignment";

// Act
const result = containsWord(sentence, "qa");

// Assert
expect(result).toBe(true);
}) ;

//-------------------addItem

function addItem(arr, item) {
    arr.push(item);
    return arr
}

test ('adds an item at the end of the list  ', () => {
  
// Arrange
const arr = [5, 6, 7];

// Act
const result = addItem(arr, 3);

// Assert
expect(result).toEqual([5, 6, 7, 3]);
}) ;

function addItem(arr, item) {
    arr.push(item);
    return arr
}

test ('adds an item that is already in the list  ', () => {
  
// Arrange
const arr = [5, 6, 7];

// Act
const result = addItem(arr, 5);

// Assert
expect(result).toEqual([5, 6, 7, 5]);
}) ;

function addItem(arr, item) {
    arr.push(item);
    return arr
}

test ('adds an item to an empty list  ', () => {
  
// Arrange
const arr = [];

// Act
const result = addItem(arr, 3);

// Assert
expect(result).toEqual([3]);
}) ;

function addItem(arr, item) {
    arr.push(item);
    return arr
}

test ('adds more than one item to the list  ', () => {
  
// Arrange
const arr = [5, 6, 7];

// Act
const result = addItem(arr, [3, 8]);

// Assert
expect(result).toEqual([5, 6, 7, 3, 8]);
}) ;

function addItem(arr, item) {
    arr.push(item);
    return arr
}

test ('adds an item to the list  ', () => {
  
// Arrange
const arr = [5, 6, 7];

// Act
const result = addItem(arr, 3);

// Assert
expect(result).toEqual([5, 6, 7, 3]);
}) ;