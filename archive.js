function getOwnDivisors(number) {  //Find own divisors
  let gOD = []
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      gOD.push(i);
    }
  }

  return gOD
}

function quadraticEquation(a, b, c) {
  let x1, x2, discriminant;
  discriminant = Math.sqrt(Math.pow(b, 2) - (4 * a * c))

  if (!discriminant) return "Equation doesn't have any solutions"

  x1 = ((-b) + discriminant / (2 * a))
  x2 = ((-b) - discriminant / (2 * a))

  if (x1 === x2) {
    return x1
  } else {
    return [x1, x2]
  }
}

function getRandomString(length) {
  let arr = [];
  const alphabetEn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  while (arr.length < length) {
    arr.push(alphabetEn[Math.floor(Math.random() * 53)])
  }

  return arr.join('')
}

function getSum(array) { // Find sum of array elements
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i])
  }

  return sum
}

function isFreindly(firstNumber, secondNumber) { //Comparing the divisors of first number with second number, and vice versa
  let sum1 = getSum(getOwnDivisors(firstNumber));
  let sum2 = getSum(getOwnDivisors(secondNumber));
  return firstNumber === sum2 && secondNumber === sum1;
}

function getFreindly(startNumber, endNumber) {
  let freindlyPairs = [];
  if (startNumber < endNumber) {
    for (let i = startNumber; i < endNumber; i++) {
      for (let j = i + 1; j <= endNumber; j++) {
        if (isFreindly(i, j)) {
          freindlyPairs.push([i, j]);
        }
      }
    }
  }
  return freindlyPairs;
}

function getPerfect(startNumber, endNumber) {
  let perfectArray = [];
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    let a = getSum(getOwnDivisors(i));
    if (a === i) {
      perfectArray.push(i);
    }
  }
  return perfectArray;
}

const makeUniq = (arr) => {
  const uniqSet = new Set(arr);
  return [...uniqSet];
}

function inArray(element, array) {
  return array.indexOf(element) !== -1
}

function intersectionOfArray(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (inArray(array1[i], array2)) {
      result.push(array1[i]);
      if (array2.indexOf(array1[i]) !== -1){
      }
    }
  }
  return makeUniq(result);
}

function arrayCompare(firstArray, secondArray) {
  let result = []
  for (let elem of firstArray) {
    if (!inArray(secondArray, elem)){
      result.push(elem);
    }
  }

  return result
}

function getArrayDifference(arr1, arr2) {
  let diff1 = (arrayCompare(arr1, arr2));
  let diff2 = (arrayCompare(arr2, arr1));
  return [].concat(diff1, diff2);
}


//================================GCD=============================
function getGCD(numberOne, numberTwo) {
  let first = getDivisors(numberOne);
  let second = getDivisors(numberTwo);

  return console.log('Greatest common divisor of the ' + numberOne + ' and ' + numberTwo
    + ' is ' + Math.max(...intersectionsArray(first, second)))
}

getGCD(12, 18)


function intersectionsArray(firstArray, secondArray) {
  let result = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (inArray(firstArray[i], secondArray)) {
      result.push(firstArray[i])
    }
  }

  return result;
}

function inArray(element, array) {
  return array.indexOf(element) !== -1;
}


function getDivisors(number) {
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }

  return result;
}


function shuffle(array) {
  let result = [];
  while (array.length > 0) {
    result.push(array.splice(getRandom(0, array.length-1), 1)[0])
  }

  return result
}
//================================GetLuckyTicket====================
function formString(character, length) {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += character;
  }

  return string;
}

function normalizeNumber(number, digitsAmount) {
  let str = String(number)
  return formString('0', digitsAmount - str.length) + str
}


function isLucky(evenDigits) {
  let sum1 = 0;
  let sum2 = 0;
  let str = String(evenDigits)
  let equator = str.length / 2;

  if (str.length % 2 !== 0) {
    throw new Error('Please enter a number with even digits');
  }

  for (let i = 0; i < equator; i++) {
    sum1 += Number(str[i]);
  }

  for (let i = equator; i < str.length; i++) {
    sum2 += Number(str[i])
  }

  return sum1 === sum2;
}

function getLuckyTickets(digitsAmount) {
  let result = [];
  let first = getFirst(digitsAmount);
  let last = getLast(digitsAmount);

  if (digitsAmount % 2 === 0 && digitsAmount > 2) {
    for (let i = first; i <= last; i++) {
      let tickets = normalizeNumber(i, digitsAmount);
      if (isLucky(tickets)) {
        result.push(tickets)
      }
    }
  } else {
    throw new Error("Invalid digitsAmount. Please enter a valid even number greater than two")
  }

  return result;
}

console.log(getLuckyTickets(4))

function getFirst(digitsAmount) {
  let innerCharacter = formString(0, (digitsAmount / 2) - 1);
  let result = [1, 1]
  result.splice(1, 0, innerCharacter)

  return result.join('')
}

function getLast(digitsAmount) {
  return formString(9, digitsAmount)
}

//================================Dates=========================
const date = new Date();
let time = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getUTCHours()];
const ISO8601 = [date.getFullYear(), date.getMonth(), date.getDate()]
const today = date.getDay()
const month = date.getMonth()
const nowTime = date.getTime()

function convertDate (begin, end) {
  let minutes = Math.round((end - begin) / (1000 * 60))
  let hours   = Math.round((end - begin) / (1000 * 60 * 60))
  let days    = Math.round((end - begin) / (1000 * 60 * 60 * 24))
  let months  = Math.round((end - begin) / (1000 * 60 * 60 * 24 * 12))
  let years   = Math.round((end - begin) / (1000 * 60 * 60 * 24 * 365))

  return `Difference: ${years} years or ${months} months or ${days} days or ${hours} hours or ${minutes} minutes`
}

function getTime([hh, mm, ss, UTC]) {
  let diffUTC = 24 - UTC
  return `Current time: ${addZeroTime(hh)}:${addZeroTime(mm)}:${addZeroTime(ss)} + ${diffUTC}`
}

function addZeroTime(number) {
  if (number <= 9 && number >= 0)
    return '0' + number;
  return number
}

function getDateISO8601([yyyy, mm, dd]) {
  return `Current date in ISO 8601 format: ${yyyy}:${addZeroTime(mm)}:${addZeroTime(dd)}`
}

function getEngWeekDay(number) {
  switch (number) {
    case 0:
      number = 'Sunday';
      break;
    case 1:
      number = 'Monday';
      break;
    case 2:
      number = 'Tuesday';
      break;
    case 3:
      number = 'Wednesday';
      break;
    case 4:
      number = 'Thursday';
      break;
    case 5:
      number = 'Friday';
      break;
    case 6:
      number = 'Saturday';
      break;
    default:
      return 'Undefined';
  }

  return `${number}`;
}

function getLastDay(month, year) {
  let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month !== 1) {
    return lastDays[month];
  } else {
    if (isLeapYear(year)) {
      return 29
    } else {
      return 28
    }
  }
}

function isLeapYear(year) {
  return (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0))
}

function isCorrectDate(year, month, day) {
  let date = new Date(year, month, day)
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}

const nowadays = new Date();
let specificDate = new Date(nowadays.getFullYear(), nowadays.getMonth() - 1, 1)

function getDifferenceDays(fromYear, fromMonth, fromDate, toYear, toMonth, toDate) {
  let subtrahend = new Date(fromYear, fromMonth, fromDate)
  let minuend = new Date(toYear, toMonth, toDate)
  return (minuend- subtrahend) / (1000 * 60 * 60 * 24)
}


function getWeekEndInBetween (startFullYear, endFullYear) {
  let sum = 0;
  for (let i = startFullYear; i <= endFullYear; i++){
    let date = new Date(i, 0, 1);
    console.log(date.getDay())
    if(getWeekEnd(date.getDay())) {
      sum += 1;
    }
  }

  return sum
}

function getWeekEnd (day) {
  return day === 0 || day === 6
}

function defineZodiacs(month, date) {
  let birthday = [addZeroTime(month), addZeroTime(date)].join('-');

  if (birthday <= '12-22' && birthday <= '01-19') {
    return 'You are Capricorn'
  } else if (birthday >= '01-20' && birthday <= '02-18') {
    return 'You are Aquarius'
  } else if (birthday >= '02-19' && birthday <= '03-20') {
    return 'You are Pisces'
  } else if (birthday >= '03-21' && birthday <= '04-19') {
    return 'You are Aries'
  } else if (birthday >= '04-20' && birthday <= '5-20') {
    return 'You are Taurus'
  } else if (birthday >= '05-21' && birthday <= '06-20') {
    return 'You are Gemini'
  } else if (birthday >= '06-21' && birthday <= '07-22') {
    return 'You are Cancer'
  } else if (birthday >= '07-23' && birthday <= '08-22') {
    return 'You are Leo'
  } else if (birthday >= '08-23' && birthday <= '09-22') {
    return 'You are Virgo'
  } else if (birthday >= '09-22' && birthday <= '10-22') {
    return 'You are Libra'
  } else if (birthday >= '10-23' && birthday <= '11-21') {
    return 'You are Scorpio'
  } else if (birthday >= '11-22' && birthday <= '12-21') {
    return 'You are Sagittarius'
  } else {
    return 'You input date in a wrong format'
  }
}


//================================DOM=========================
input.addEventListener('input', function() {
  let lthInp = input.value.length
  if (lthInp <= 5) {
    p.classList.remove('coloredWrong')
    p.classList.add('coloredRight')
    p.textContent = `Input must contain less than or equal to 5 characters now you entered ${lthInp} characters`
  } else {
    p.textContent = `You\'ve exceeded required size on ${lthInp - 5} characters`
    p.classList.remove('coloredRight')
    p.classList.add('coloredWrong')
  }
})

input.addEventListener('input', (e) => {
  input.value = e.data;
})

console.log(navigator.userAgent)

