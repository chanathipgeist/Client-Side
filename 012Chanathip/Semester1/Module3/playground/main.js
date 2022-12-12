import { Girlfriend } from "./list/Girlfriend.js";
import { Idol } from "./list/Idol.js";

const divBotton=document.getElementById("buttonPanel")
const addBtn=divBotton.children[0]
const idolBtn=divBotton.children[1]

const GirlfriendList=()=>{
    const ulParentElement=document.querySelector('ul')
    ulParentElement.textContent =''
    for (let i=0;i<Girlfriend.length;i++){
    const listGf=document.createElement('li')
    listGf.textContent=`Name:${Girlfriend[i].name} ID:${Girlfriend[i].id}`
    ulParentElement.appendChild(listGf)
    }
   
}
addBtn.addEventListener("click",GirlfriendList,false)



const AvList=()=>{
    const ulParentElement=document.querySelector('ul')
    ulParentElement.textContent =''
    for (let i=0;i<Idol.length;i++){
    const listAv=document.createElement('li')
    listAv.textContent=`Name:${Idol[i].name} ID:${Idol[i].code}`
    ulParentElement.appendChild(listAv)
    }
   
}
idolBtn.addEventListener("click",AvList,false)



const search=document.getElementById("search")
// console.log(search)
const pElement=document.getElementById("gf")


// //ปุ่มsearch
// search.addEventListener('keypress',(event)=>{
//     if(event.key==='Enter')
//         pElement.textContent=search.value
// })

search.addEventListener('input',()=>{
    pElement.textContent=search.value
})
