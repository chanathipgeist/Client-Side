import { students } from "./students.js"
import { lecturers } from "./lecturers.js"
const divButton=document.getElementById("buttonPanel")
// console.log(divButton)
const studentButton=divButton.children[0]
const lecturerButton=divButton.children[1]


// const dataListHandler=(event)=>{
//     // alert(event.target.id)
//     const items=event.target.id==="1"?students:lecturers //?:
//     const ulParentElement=document.querySelector('ul')
//     ulParentElement.textContent=''
//    for(let i=0;i<items.length;i++){
//         const liElement=document.createElement('li') 
//         let textValue=''
//         for (const key in items[i]){           
//            textValue=textValue+ `${key}: ${items[i][key]} `
//         }
//        liElement.textContent=textValue
//         ulParentElement.appendChild(liElement)
//    }
// }
// // const studentHandler=()=>{dataListHandler(students)}
// studentButton.addEventListener('click', dataListHandler)
// // const lecturerHandler=()=>{dataListHandler(lecturers)}
// lecturerButton.addEventListener('click', dataListHandler)







// const dataListHandler=(items)=>{
//     const ulParentElement=document.querySelector('ul')
//     ulParentElement.textContent=''
//    for(let i=0;i<items.length;i++){
//         const liElement=document.createElement('li') 
//         let textValue=''
//         for (const key in items[i]){           
//            textValue=textValue+ `${key}: ${items[i][key]} `
//         }
//        liElement.textContent=textValue
//         ulParentElement.appendChild(liElement)
//    }
// }

// const studentHandler=()=>{dataListHandler(students)}
// studentButton.addEventListener('click', studentHandler)

// const lecturerHandler=()=>{dataListHandler(lecturers)}
// lecturerButton.addEventListener('click', lecturerHandler)








// //create student handler function
// const studentHandler=()=>{
//     //console.log(students)
//     const ulParentElement=document.querySelector('ul') //queryหาพ่อ
//     ulParentElement.textContent='' //setให้เป็นว่างๆตั้งแต่แรก เวลากดจะได้รีเฟรชใหม่ตลอด
//     for (let i=0;i<students.length;i++){
        
//         const liElement = document.createElement('li')
//         liElement.textContent=`ID:${students[i].id}, NAME:${students[i].name}}`//<li>ID:XXX, NAME: XXX</li>
//         ulParentElement.appendChild(liElement)
        
//     }
// }


// //create lecture handler function
// const lectureHandler=()=>{
//     //console.log(lecturers)
//     const ulParentElement=document.querySelector('ul')
//     ulParentElement.textContent=''
//     for (let i=0;i<lecturers.length;i++){
        
//         const liElement = document.createElement('li')
//         liElement.textContent=`ID:${lecturers[i].id}, NAME:${lecturers[i].name}}`//<li>ID:XXX, NAME: XXX</li>
//         ulParentElement.appendChild(liElement)
        
//     }
// }

// studentButton.addEventListener('click',studentHandler)
// lecturerButton.addEventListener('click',lectureHandler)










// //1.add event handler by using annonymouse function
// studentButton.addEventListener('click',(e)=>{
//     alert(`hello, student button!
//     event target: ${e.target},
//     event target id: ${e.target.id},
//     event type: ${e.type},
//     event current target: ${e.currentTarget},
//     event phase: ${e.eventPhase}`
//     )
// }, true)

// divButton.addEventListener('click', (event)=>{
//     alert(`hello, div parent!
//     event target: ${event.target},
//     event target id: ${event.target.id},
//     event type: ${event.type},
//     event current target: ${event.currentTarget},
//     event phase: ${event.eventPhase}`)
// }, true)

//function declaration
// function studentHandler(){
//     alert('Good bye')
// }

//function expression with arrow function
// const studentHandler=()=>{
//     alert('Good bye')
// }
// //2.add event handler by using function name
// studentButton.addEventListener('click', studentHandler)
// studentButton.removeEventListener('click', studentHandler)

