function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const listTodoDiv = document.getElementById('listTodo')
    //create new <div>
    const newDivTodo=document.createElement('div')
    newDivTodo.className = 'todoItem'
    newDivTodo.setAttribute('id',"newId")

    //create new <p>
   const newP=document.createElement('p')
   newP.textContent=newDescription
   newDivTodo.appendChild(newP)

    //create done button
    const doneBut=document.createElement('button')
    doneBut.textContent='Not done'
    newDivTodo.appendChild(doneBut)
    //create remove button
    const removeBut=document.createElement('button')
    removeBut.textContent='remove'
    newDivTodo.appendChild(removeBut)

    listTodoDiv.appendChild(newDivTodo)
    
  }
  function showNumberOfDone(numberOfDone) {
    const doneP = document.getElementById('done')
    doneP.textContent = `Number of Done:${numberOfDone}` 
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const notDoneP = document.getElementById('notDone')
    notDoneP.textContent = `Number of Not Done:${numberOfNotDone}`
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
module.exports = todoUserInterface
// export{todoUserInterface}