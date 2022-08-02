'use strict';

let p = document.querySelector('p')
// let pAll = document.querySelectorAll('p')
// let txtArea = document.getElementById('txtArea')
let input = document.getElementById('inp')
let select = document.getElementById('select')
// let option = select.children;
// let input1 = document.getElementById('inp1')
// let inputAll = document.querySelectorAll('input')
let div = document.querySelector('div')
let a = document.querySelector('a')
let button = document.getElementById('btn');
let li = document.querySelectorAll('div > ul li')
let ul = document.querySelector('div > ul')
let newLi = document.createElement('li')
// let button1 = document.getElementById('btn1');
// let ul = document.querySelector('ul')
// let form = document.getElementById('form')
//
// form.onclick = function(event) {
//   event.target.style.backgroundColor = 'yellow';
//
//   setTimeout(() => {
//     alert("target = " + event.target.tagName + ", this=" + this.tagName);
//     event.target.style.backgroundColor = ''
//   }, 0);
// };

// div.addEventListener('click', function (evn) {
//   if(evn.target.localName === 'li') {
//     for (let el of li) {
//       console.log(el)
//       el.textContent += '!'
//     }
//   } else if (evn.target.localName === 'ul') {
//     let newLi = document.createElement('li')
//     ul.append(newLi)
//   }
// })


function sortMyString(s) {
  let reserve = []
   s.split('').filter((el, i, reserve) => {
     reserve[i+1] +=' extra'
    return (i % 2 === 0)
  })
  console.log(s)
  console.log(reserve)
  return 1
}

console.log(sortMyString("CodeWars")); // "CdWr oeas"
console.log(sortMyString("YCOLUE'VREER")); //"YOU'RE CLEVER"