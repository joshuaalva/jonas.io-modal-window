'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// so when you use query selector that has multiple selections only the first one is selected... if that makes sense
// show-modal has 3 buttons only the first one is selected using '.show-modal'
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);
// this is now an element
// multiple elements with the same class
// one line of code doesn't need the curly braces
