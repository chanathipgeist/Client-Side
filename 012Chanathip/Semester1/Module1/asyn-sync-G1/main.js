//Sync
// console.log('INT201')
// console.log('Vanila JavaScript')
// console.log('Section 1')
// console.log('Love Ploy')
// console.log('Sayonara~')


//Asyn
// console.log('Hi!')
// console.log('Im Geist')
// setTimeout(function cb(){
// console.log('あなたは私にとって可愛いです "宝石"')
// console.log('Sayonara~')
 
// },5000)
// //setTimeout(function,millisecond)
// console.log('I want to tell you something.')




//1. We can assign function to Variable.
// function add(n1,n2){
//     return n1+n2
// }
// function sub(n1,n2){
//     return n1-n2
// }
// function Multiply(n1,n2){
//     return n1*n2
// }
// function divide(n1,n2){
//     return n1/n2
// }

// let sum1=add
// console.log(sum1(10,20))
// console.log(typeof sum1)

// let sum2=add(10,20)
// console.log(sum2(10,20))
// console.log(typeof sum2)
// console.log(add(10,20))
// console.log(sub(10,20))
// console.log(Multiply(10,20))
// console.log(divide(10,20))


//2.We can send function as parameter.
// function calculator(n1,n2,op){
//     return op(n1,n2)
// }
// console.log(calculator(10,5,add))
// console.log(calculator(10,5,sub))
// console.log(calculator(10,5,Multiply))
// console.log(calculator(10,5,divide))


//3.We can return function as a result of another function
function saySomething(say){
    return say
}
function doSomething(){
    return saySomething // เป็นการreturn function ไม่ใช่การประมวณผล
}
let doIt = doSomething() //คล้ายๆlet sum = add
console.log(doIt('出会いは突然だが、お互いの恋愛は一生懸命。')) //ถ้าจะให้functionทำงาน function ต้องมีวงเล็บ