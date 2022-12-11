// //1. create <li> elementconst 
// const liElement = document.createElement('li') //<li></li>

// //2. assign class attribute  with value "developer" to <li> element
// liElement.setAttribute('class', 'developer') //<li class="developer"></li>

// //3. assign text value "INT202 Server Side I" to <li> element
// liElement.textContent = 'INT202 Server Side I'  //<li class="developer">INT202 Server Side I</li>

// //3.5 query <ul> parent element
// const bodyChildrenNodes = document.body.children 
// //console.log(bodyChildrenNodes)
// const divCourseListNode = bodyChildrenNodes[1]
// const ulElementNode = divCourseListNode.children[0]
// console.log(ulElementNode)

// //4. append <li> child to <ul> parent 
// ulElementNode.appendChild(liElement)



//1.getElementById
const divInstructorNode = document.getElementById('instructors')
console.log(divInstructorNode)

//HTMLCollection
//2.getElementsByTagName
const liElementNodes = document.getElementsByTagName('li') //HTML collection (array-like)
console.log(liElementNodes)
console.log(liElementNodes.length) //4
console.log(liElementNodes[0]) // <li class="developer">INT201 Client Side I</li>

//transform array-like to array so that we can use foreach
Array.from(liElementNodes).forEach((element) => console.log(element))
//show element in liElementNodes

//3. getElementsByClassName
const developNodes = document.getElementsByClassName('developer')
console.log(developNodes)
//  <li class="developer">INT201 Client Side I</li>
// <p class="developer">Lect.Pichet Limvajiranan</p>

//NodeList (array-like, can use only foreach)
//1. getElementsByName
const subjectNodes = document.getElementsByName('subject')
console.log(subjectNodes)
// <button name="subject" type="submit" value="HTML">HTML</button>
// <button name="subject" type="submit" value="CSS">CSS</button>

const pNodes = document.querySelectorAll('p')
console.log(pNodes)
pNodes.forEach((element) => console.log(element))
//<p>Lect.Kriengkrai Porkaew</p>
//<p class="developer">Lect.Pichet Limvajiranan</p>
//<p>Lect. Umaporn Supasitthimethee</p>
//เอาทุกตัวที่เป็นp

const pFirstNode = document.querySelector('p')
console.log(pFirstNode)
//<p>Lect.Kriengkrai Porkaew</p> เอาแค่ตัวแรกที่เป็นp

// const liDevopsNodes = document.querySelectorAll('li.devops')
const liDevopsNodes = document.querySelectorAll('li[class="devops"]')
console.log(liDevopsNodes)

// const divCourseList = document.querySelectorAll('div#courseList')
const divCourseList = document.querySelectorAll('#courseList')
console.log(divCourseList[0])



// insertBefore(newNode, referenceNode)
//1. parent node (query)
// <ul>
const ulTagNames = document.getElementsByTagName('ul')
const ulParentNode = ulTagNames[0]
console.log(ulParentNode)

//2. new node (create)
//  <li class="developer">INT200 Data Structure and Algorithms</li>
const liElement = document.createElement('li')
liElement.setAttribute('class', 'developer')
liElement.textContent = 'INT200 Data Structure and Algorithms'

//3. refer node (query)
//<li class="database">INT205 Database I</li>
const liReferNode = ulParentNode.children[2]

//4. insert before refer node
ulParentNode.insertBefore(liElement, liReferNode)




//replaceChild(newChild, oldChild)
//replace <p class="developer">Lect.Pichet Limvajiranan</p>
// with <p>Lect.Saichon Jaiyen</p>
//1. query parent node
const divParentNode = document.getElementById('instructors')

//2. create new node
const pNewNode = document.createElement('p')
pNewNode.textContent = 'Lect.Saichon Jaiyen'

//3. query old node
const oldNode = divParentNode.children[1]

//4. replce node
divParentNode.replaceChild(pNewNode, oldNode)






//removeChild(child)

//1. query parent node
//using divParentNode above

//2. query deleting node
const deletedNode = divParentNode.lastElementChild

//3. remove node
divParentNode.removeChild(deletedNode)


//systemDialog
const yourName = prompt('Who are you?', 'enter your name')
if (yourName === null) alert('Welcome, guest')
else {
  const isConfirm = confirm(`Are you ${yourName}?`)
  isConfirm ? alert(`Welcome, ${yourName}`) : alert('Welcome')
}