// import{todoManagement} from './lib/todoManagement.js'
const todoManagement = require('./lib/todoManagement.js')
const todoUserInterface = require('./UI/todoList.js')

showTodoItem(addTodo("Hi Js"), "Hi Js")
showTodoItem(addTodo("Welcome HTML"), "Welcome HTML")
showTodoItem(addTodo("Ooh, Ruby"), "Ooh, Ruby")
showTodoItem(addTodo("Sawatdee, Kotlin"), "Sawatdee, Kotlin")
console.log(showNumberOfDone(getNumberOfDone()))
console.log(showNumberOfNotDone(getNumberOfNotDone()))