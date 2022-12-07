// class Person{
//     constructor(firstName='N/A', lastName='N/A', dateOfBirth=new Date(Date.now())){
//         this.firstName=firstName
//         this.lastName=lastName
//         this.dateOfBirth=dateOfBirth
//     }
//     getFullName(){
//      return `${this.lastName}, ${this.firstName}`
//     }
//     getAge(){
//         const diff_ms=Date.now()-this.dateOfBirth.getTime()
//         const diff_date=new Date(diff_ms)
//         return diff_date.getUTCFullYear()-1970
//     }
// }

// const p1=new Person('Somchai','Deejai', new Date(1999,0,30))
// console.log(p1.getFullName())
// console.log(p1.getAge())
// const p2=new Person('somchai','deejai', new Date(2000,0,30))
// console.log(p2.getFullName())
// console.log(p2.getAge())
// // const p1={id:1, firstName:'Somchai', lastName:'Jaidee'}
// Person.prototype.isEqual=function(anotherPerson){
//     return this.firstName?.toLowerCase()===anotherPerson?.firstName?.toLowerCase() && this?.lastName?.toLowerCase() ===anotherPerson?.lastName?.toLowerCase()
// }
// console.log(Person.prototype)
// console.log(p2.isEqual(p1))
// Person.prototype.toString=function (){
//     return `fullname:${this.getFullName()}, age: ${this.getAge()}`
// }
// console.log(p1.toString())
// console.log(p2.toString())

//check empty
// const obj1={}
// const obj2={id:1,product:'pen'}

// console.log(JSON.stringify(obj1)==='{}'?'empty':'not empty')
// console.log(JSON.stringify(obj2)==='{}'?'empty':'not empty')

// console.log(Object.keys(obj1))
// console.log(Object.keys(obj1).length===0?'empty':'not empty')
// console.log(Object.keys(obj2))
// console.log(Object.keys(obj2).length===0?'empty':'not empty')

const buyer={
    id:1234,
    fullName: {
    firstName:'Somchai',
    lastName:'Jaidee'
},
    totalPoints:1000
}

const address={
    no:555,
    street: 'Phavha-U-thid',
    province: 'Bangkok'
}

// const {fullName}=buyer
// console.log(fullName)
// const{fullName:{firstName,lastName}}=buyer
// console.log(firstName)
// console.log(lastName)

// ///spread operator
// //merge
// const buyerProfile={...buyer, ...address}
// console.log(buyerProfile)
// //copy with replace
// const newBuyer={...buyer, totalPoints:0}
// console.log(newBuyer)

// //rest
// const {id,...buyerDetails}=buyer
// console.log(id)
// console.log(buyerDetails)

//destruction array with nested object
// const products=[
//     {productId:1, productName:'Pen'},
//     {productId:2, productName:'Notebook'}
//  ]
//  const [,{productId}]=products
//  console.log(productId)



// without parameter
//function declaration (must have function name)
function hello1(){
    return `hello world`
}
//function expression (might not have function name)
const hello2 = function(){
    return `hello world`
}
//arrow function (expression)
const hello3=()=>`hello world`
//full syntax  (msg)=>{return `hello, ${msg}`}
console.log(hello3())
//one parameter
//function declaration (must have function name)
function greeting1(msg){
    return `hello, ${msg}`
}
console.log(greeting1('Boys'))
//function expression (might not have function name)
const greeting2 = function(msg){
    return `hello, ${msg}`
}
console.log(greeting2('Girls'))
//arrow function (expression)
const greeting3=msg=>`hello, ${msg}`
//full syntax  (msg)=>{return `hello, ${msg}`}
console.log(greeting3('Guys'))
//two parameters
//function declaration (must have function name)
function addition1(a, b){
    return a+b
}
//function expression (might not have function name)
const addition2=function (a,b){
    return a+b
}
//arrow function (expression)
const addition3=(a,b)=>{return a+b}















