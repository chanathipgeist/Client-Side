const inputElement=document.getElementById("searchValue")
console.log(inputElement)

const pElement=document.getElementById('display')

//ปุ่มsearch
// inputElement.addEventListener('keypress',(event)=>{
//     if(event.key==='Enter')
//         pElement.textContent=inputElement.value
// })


//เขียนแล้วมันแสดงตามเลย
inputElement.addEventListener('input',()=>{
        pElement.textContent=inputElement.value
})


