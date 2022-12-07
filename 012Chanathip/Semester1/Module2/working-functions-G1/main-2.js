// //anonymous function with keyword 'function'
// const getChar1=function (msg, index){
//     return msg[index]
// }
// console.log(getChar1('hello world', 7))
// //anonymous function with arrow function
// const getChar2=(msg, index)=>{
//     return msg[index]
// }
// console.log(getChar2('hello world', 3))

// function outer(a){
//     let b = 2
//     function inner1(c){
//         let b=20
//         let d=4
//         console.log(`inner1:b ${b}`)
//         return d+c+b
//     }
//     const resultInner1=inner1(100)
//     console.log(`resultInner1 :${resultInner1}`)
//     console.log(`outer: b ${b}`)
//     return a+b
// }
// console.log(outer(10))

// function outer(){
//     function inner(x){
//        return 'inner here' + x
//     }
//     return inner
// }
// console.log(outer()('soneone'))

// const inFn=outer()
// console.log(inFn('somewhere'))





// function counter() {
//     //free variable
//     let count = 0
//     function increment() {
//      return count++
//     }
//     function decrement() {
//      return count--
//     }
//     function getCount() {
//      return count
//     }
//     return {
//         increment,
//         decrement,
//         getCount
//     }
//    }
// //object destructuring
// const {increment,decrement, getCount}=counter()
// increment()
// increment()
// console.log(getCount())
//    const c=counter() 
//c={increment:increment, decrement:decrement, getCount:getCount}
//    c.increment()
//    c.increment()
//    c.increment()
//    c.decrement()
//    console.log(c.getCount())




// //nested function
// function average(nums){
//     function sum(){
//         let total=0
//         for (const num of nums){
//             total+=num
//         }
//         return total
//     }
//     return sum()/nums.length
// }
// console.log(average([1,2,3,4,5]))

// //independence functions
// function sum2(nums){
//     let total=0
//     for (const num of nums){
//         total+=num
//     }
//     return total
// }
// function average2(nums){
//     return sum2(nums)/nums.length
// }
// console.log(average2([1,2,3,4,5]))


// //arguement
// function doSomething(a,b,c,d){
//     // console.log(a)
//     // console.log(b)
//     // console.log(c)
//     // console.log(d)
//     for(const a of arguments){
//         console.log(a)
//     }
//     arguments[0]=1000
//     console.log(a)
//     console.log(arguments.length)
// }
// doSomething(10,20,300)

// //rest
// function doSomething(x, ...rest){
//     console.log(x)
//     console.log(rest)
//     console.log(rest[0])
// }
// doSomething(1,2,3,4)