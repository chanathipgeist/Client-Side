import { todoManagement } from '../lib/todoManagement.js'
import { todoUserInterface } from '../UI/todoList.js'
const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoUserInterface()

const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement()

// const todoManagement = require('../lib/todoManagement.js')
// const todoList = require('../UI/todoList.js')

// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoList()
// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

const addTodoHandler = () => {
 const inputValue=document.getElementsByTagName('input')[0].value//valueคือค่าในกล่องข้อความ
//  console.log(btn)
if(inputValue.length>0){
  const todoId=addTodo(inputValue)
  showTodoItem(todoId,inputValue)
  const todoItem=document.getElementById(todoId)
  const notDoneBtn = todoItem.getElementsByTagName("button")[0]//เข้าถึงปุ่มNot Done
  const removeBtn = todoItem.getElementsByTagName("button")[1]//เข้าถึงปุ่มremove
  notDoneBtn.addEventListener('click',notDoneButtonHandler)//เพิ่มEventให้ปุ่มNot done
  removeBtn.addEventListener('click',removeButtonHandler)//เพิ่มEventให้ปุ่มremove
  showNumberOfDone(getNumberOfDone())//เอาfunction ShowNumberOfDoneมาเพื่อโชว์จำนวนในtodoที่มีสถานะเป็นDone ซึ่งในวงเล็บจะเป็นfunctionที่return จำtodo ที่ฟิลเตอร์ว่ามีค่าเป็นdoneเป็นtrueแล้ว
  showNumberOfNotDone(getNumberOfNotDone())//เอาfunction ShowNumberOfNotDoneมาเพื่อโชว์จำนวนในtodoที่มีสถานะเป็นNot Done ซึ่งในวงเล็บจะเป็นfunctionที่return จำtodo ที่ฟิลเตอร์ว่ามีค่าเป็นdoneเป็นfalseแล้ว
}

}

const notDoneButtonHandler = (event) => {
const button = event.target//เข้าถึงtargetที่ต้องการ(ตัวที่เล็งไว้ ก็คือปุ่มที่จะกด)
button.textContent='Done'//เปลี่ยนtextให้เป็นDone
button.setAttribute('style',"background-color: green; color: white")//ตั้งค่าพวกสี
setItemToDone(event.target.parentElement.id)//setให้idของพ่อของtargetเป็นdone
showNumberOfDone(getNumberOfDone())//เอาfunction ShowNumberOfDoneมาเพื่อโชว์จำนวนในtodoที่มีสถานะเป็นDone ซึ่งในวงเล็บจะเป็นfunctionที่return จำtodo ที่ฟิลเตอร์ว่ามีค่าเป็นdoneเป็นtrueแล้ว
  showNumberOfNotDone(getNumberOfNotDone())//เอาfunction ShowNumberOfNotDoneมาเพื่อโชว์จำนวนในtodoที่มีสถานะเป็นNot Done ซึ่งในวงเล็บจะเป็นfunctionที่return จำtodo ที่ฟิลเตอร์ว่ามีค่าเป็นdoneเป็นfalseแล้ว
}

const removeButtonHandler = (event) => {
  const button = event.target//เข้าถึงtargetที่ต้องการ(ตัวที่เล็งไว้ ก็คือปุ่มที่จะกด)
  removeTodoItem(Number(button.parentElement.id))//ลบTargetออกจากTodo
  removeTodo(Number(event.target.parentElement.id))//ลบTargetออกจากArray todos
  showNumberOfDone(getNumberOfDone())//เอาfunction ShowNumberOfDoneมาเพื่อโชว์จำนวนในtodoที่มีสถานะเป็นDone ซึ่งในวงเล็บจะเป็นfunctionที่return จำtodo ที่ฟิลเตอร์ว่ามีค่าเป็นdoneเป็นtrueแล้ว
  showNumberOfNotDone(getNumberOfNotDone())//เอาfunction ShowNumberOfNotDoneมาเพื่อโชว์จำนวนในtodoที่มีสถานะเป็นNot Done ซึ่งในวงเล็บจะเป็นfunctionที่return จำtodo ที่ฟิลเตอร์ว่ามีค่าเป็นdoneเป็นfalseแล้ว
}

export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
}

// module.exports = {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler
// }
