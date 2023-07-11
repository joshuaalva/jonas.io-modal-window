'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// so when you use query selector that has multiple selections only the first one is selected... if that makes sense
// show-modal has 3 buttons only the first one is selected using '.show-modal'
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}
// console.log(`Button clicked`);
// modal.classList.remove(`hidden`);
// overlay.classList.remove(`hidden`);
// modal.style.display = `block`;
// can pass in more with commas
// hidden class is now gone

const closedModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

btnCloseModal.addEventListener(`click`, closedModal);
overlay.addEventListener(`click`, closedModal);
// this is now an element
// multiple elements with the same class
// one line of code doesn't need the curly braces
