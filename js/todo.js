document.addEventListener('DOMContentLoaded', () => {
  const TODOS_KEY = 'todos'
  let todos = []

  const todoForm = document.querySelector('#todo-form');
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoInput = document.querySelector('#todo-form input:first-child');
    const todoObj = {
      id: Date.now(),
      text: todoInput.value,
    }
    todoInput.value = '';
    todos.push(todoObj)
    displayTodo(todoObj);
    saveTodoItem(todoObj);
  })

  const saveTodoItem = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const displayTodo = (newTodo) => {
    const todoList = document.querySelector('#todo-list');
    const li = document.createElement('li')
    li.id = newTodo.id
    const span = document.createElement('span')
    span.innerHTML = newTodo.text;
    const button = document.createElement('button')
    button.innerHTML = '🐱';
    button.addEventListener('click', (e) => {
      e.target.parentNode.remove();;
      todos = todos.filter(item => item.id != li.id)
      saveTodoItem()
    })

    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
  }

  const savedTodos = localStorage.getItem(TODOS_KEY)
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    todos.forEach(displayTodo);
  }

})
