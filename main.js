"use strict"

const todoInput = document.querySelector('.todo-in');
const addbtn = document.querySelector('.add-btn');
const clearbtn = document.querySelector('.clear-btn');
//const todoList = document.querySelector('.todo-list ol');
const delbtn = document.querySelector('.del-btn');

addbtn.addEventListener('click', e => {
    e.preventDefault();
    addTodo();
        // todoList.insertAdjacentHTML('beforeend', `<li class='todo'><span>${todoInput.value}</span><button class='del-todo'>X</button></li>`);
});

//function adds todo input value to storage
const addTodo = () => {
    if(todoInput.value == "") {
        alert('Please enter a todo')
    } else {
        //const todos = []; 
        //todos.push(todoInput.value);
        localStorage.setItem('todos', todoInput.value);
        todoInput.value = '';
    }
}

//function gets todo array from storage and shows it in a list
const showTodos = () => {
    const todos = localStorage.getItem('todos');
    console.log(todos);
    //todos.forEach(todo => console.log(todo));
}

//function removes single todo item
const removeTodo = () => {

    localStorage.removeItem('todos[i]');

    //localStorage.setItem('todo', todos);
}

//removes all the items from the todo list and storage
const clearAll = () => {
    localStorage.clear();
}

clearbtn.addEventListener('click', clearAll);
document.addEventListener("DOMContentLoaded", showTodos);
delbtn.addEventListener('click', removeTodo);

//left off
//how does content return from storage; as a string or array?
//if as a string only, can I figure out a way to have mupliple key and values and return all of them as an array?
//OR maybe return array as a string then push each string to another array?

