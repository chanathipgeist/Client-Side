function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const listTodo=document.getElementById('listTodo')

    const divTodoItem=document.createElement('div')
    divTodoItem.className='todoItem'
    divTodoItem.setAttribute('id',newId)
    listTodo.appendChild(divTodoItem)

    const pNewDesc=document.createElement('p')
    pNewDesc.textContent=newDescription
    divTodoItem.appendChild(pNewDesc)


    const btnNotdone=document.createElement('button')
    btnNotdone.textContent='Not done'
    divTodoItem.appendChild(btnNotdone)


    const btnRemove=document.createElement('button')
    btnRemove.textContent='remove'
    divTodoItem.appendChild(btnRemove)

   }


  function showNumberOfDone(numberOfDone) {
    const pNumDone = document.getElementById('done')
    pNumDone.textContent=`Number of Done:${numberOfDone}`


  }

  function showNumberOfNotDone(numberOfNotDone) {
    const pNumNotDone = document.getElementById('notDone')
    pNumNotDone.textContent=`Number of Not Done:${numberOfNotDone}`


  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
module.exports = todoUserInterface
// export{todoUserInterface}






  //   const listTodoDiv = document.getElementById('listTodo')
  //   //create new <div>
  //   const newDivTodo=document.createElement('div')
  //   newDivTodo.className = 'todoItem'
  //   newDivTodo.setAttribute('id',"newId")

  //   //create new <p>
  //  const newP=document.createElement('p')
  //  newP.textContent=newDescription
  //  newDivTodo.appendChild(newP)

  //   //create done button
  //   const doneBut=document.createElement('button')
  //   doneBut.textContent='Not done'
  //   newDivTodo.appendChild(doneBut)
  //   //create remove button
  //   const removeBut=document.createElement('button')
  //   removeBut.textContent='remove'
  //   newDivTodo.appendChild(removeBut)

  //   listTodoDiv.appendChild(newDivTodo)


  
    // const doneP = document.getElementById('done')
    // doneP.textContent = `Number of Done:${numberOfDone}`
    
    
    
    // const notDoneP = document.getElementById('notDone')
    // notDoneP.textContent = `Number of Not Done:${numberOfNotDone}`
  