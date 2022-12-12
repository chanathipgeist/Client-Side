const Todo = require('./todo.js')
// import{Todo} from "./todo.js"
function todoManagement() {
  let todos = []
  function addTodo(desc) {
    const newTodo =todos.push(new Todo(desc))
    return newTodo.id
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    return todos.filter((todo)=>todo.done===true).length
  }
  function getNumberOfNotDone() {
    return todos.filter((todo)=>todo.done===false).length
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  }
}
module.exports = todoManagement
// export{todoManagement}
