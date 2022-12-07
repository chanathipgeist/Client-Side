//number
let num1=100
let num2=20.25
let num3=1n
console.log(typeof num1)
console.log(typeof num2)
console.log(typeof num3)

//String
let str1='Hello'
let str2="Hello"
let str3=`Gretting with ${str1} and ${str2}`
console.log(typeof str1)
console.log(typeof str2)
console.log(str3)

//Boolean
let isHoliday=true
let absent=false
console.log(typeof isHoliday)
console.log(typeof absent)

//Symbol
let sym1=Symbol('id')
let sym2=Symbol('id')
console.log(typeof sym1)
console.log(typeof sym2)
console.log(sym1===sym2)

//Null
let unknownObj=null
console.log(typeof unknownObj)
console.log(unknownObj)

//Undefined
let unAssigedObj
console.log(typeof unAssigedObj)
console.log(unAssigedObj)

//Object
let student={studentID:64130500012, name:'Chanathip'}//{key:value...key:value...key:value...key:value}
console.log(student)
console.log(typeof student)

//Array
let students=['Somphod','Phannipha','Phubest']
console.log(typeof students)
console.log(students)
