import './style.css';
import addItem from '../modules/addItem.js';
import del from '../modules/deleteItem.js';
import display from '../modules/display.js';

const todoList = [];
addItem(todoList);
const clsBtn = document.getElementById('clsBtn');
clsBtn.addEventListener('click', () => {
  del(todoList);
});

display();