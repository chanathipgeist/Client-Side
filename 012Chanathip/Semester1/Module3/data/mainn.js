const inputElement=document.getElementById("searchValue")
console.log(inputElement)

const pElement=document.getElementById('display')


// inputElement.addEventListener('keypress',(event)=>{
//     if(event.key==='Enter')
//         pElement.textContent=inputElement.value
// })

inputElement.addEventListener('input',()=>{
        pElement.textContent=inputElement.value
})


