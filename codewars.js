/////////////////////////////   CODEWARS //////////////////////////////////


////////////////////////////////////////////// Jaden Casing Strings 7 kyu //////////////////////////////////////////////////////////
//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter.
// When writing on Twitter, he is known for almost always capitalizing every word.
// For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//  Your task is to convert strings to how they would be written by Jaden Smith.
//  The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

let jd = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () { //my
  return this.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ')
};


////////////////////////////////////////////// Take a Ten Minutes Walk 6 kyu //////////////////////////////////////////////////////////
//You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends
// you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early
// or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) { //my
  let counterN = 0;
  let counterS = 0;
  let counterW = 0;
  let counterE = 0;
  if (walk.length !== 10) {
    return false
  } else {
    for (let i = 0; i < walk.length; i++) {
      console.log(walk[i]);
      switch (walk[i]) {
        case 'n':
          counterN++;
          break;
        case 's':
          counterS++;
          break;
        case 'w':
          counterW++;
          break;
        case 'e':
          counterE++;
          break;
      }
    }
    return (counterN === counterS && counterE === counterW)
  }
}


////////////////////////////////////////////// Unique In Order 6 kyu //////////////////////////////////////////////////////////
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items
// without any elements with the same value next to each other and preserving the original order of elements.
const unique = function (iterable) {
  return Array.from(new Set(iterable))
}

let uniqueInOrder = function (iterable) { //my
  let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
  return strArr.filter((currentValue, i) => iterable[i] !== iterable[i + 1])
}

////////////////////////////////////////////// Valid Braces 6 kyu //////////////////////////////////////////////////////////
// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// parentheses char codes: ( = 40, ) = 41;
// brackets char codes: [ = 91, ] = 93;
// curlyBraces char codes: { = 123, 125 = };

 function isPair(braces) {  //моё решение
  let parenthesesOpen = 0
  let parenthesesClose = 0
  let bracketOpen = 0
  let bracketClose = 0
  let curlyBracesOpen = 0
  let curlyBracesClose = 0

  for (let i = 0; i < braces.length; i++) {
    if (braces.charCodeAt(i) === 40  && braces.charCodeAt(i + 1)  !== 93  && braces.charCodeAt(i + 1) !== 125) ++parenthesesOpen
    if (braces.charCodeAt(i) === 91  && braces.charCodeAt(i + 1)  !== 41  && braces.charCodeAt(i + 1) !== 125) ++bracketOpen
    if (braces.charCodeAt(i) === 123 && braces.charCodeAt(i + 1)  !== 41  && braces.charCodeAt(i + 1) !== 93)  ++curlyBracesOpen
    if (braces.charCodeAt(i) === 41  && braces.charCodeAt(i + 1)  !== 40)  ++parenthesesClose
    if (braces.charCodeAt(i) === 93  && braces.charCodeAt(i + 1)  !== 91)  ++bracketClose
    if (braces.charCodeAt(i) === 125 && braces.charCodeAt(i + 1)  !== 123) ++curlyBracesClose

  }

  return parenthesesOpen === parenthesesClose && bracketOpen === bracketClose && curlyBracesOpen === curlyBracesClose
}


function checkBalance(str) //Это чужое
{
  let stack = [], open = "([{", close = ")]}";
  for (const char of str)
  {
    let i = open.indexOf(char);
    if (i > -1) stack.push(close[i]);
    if (close.includes(char) && char !== stack.pop()) return false
  }
  return !stack.length;
}
console.log(checkBalance("(){}[]"))
console.log(checkBalance("([{}])"))
console.log(checkBalance("[({})](]"))
console.log(checkBalance("(}"))
console.log(checkBalance("[(])"))
console.log(checkBalance(")(}{]["))
console.log(checkBalance("())({}}{()][]["))