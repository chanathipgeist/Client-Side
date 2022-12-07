//คำอธิบายที่กระชับแล้วชัดเจน
//แปลเป็นไทยมันจะเป็นคำว่า "มีมั้ย" ถ้ามีก็เป็นtrue ถ้าไม่มีก็เป็นFalse มีแค่ตัวเดียวก็ถือว่ามี
//ซึ่งmethod someอ่ะ มันจะreturnแค่true กับ falseเท่านั้น

//method syntax


// Arrow function

const fruits=['apple','kiwi','peach','banana','grape']

const onePeach =fruits.some((element) =>{ //มีพีชมั้ย
    return element==='peach'
})

console.log(onePeach)//true
console.log(`__________________________________________\n`)




// Callback function

function isBiggerThan10(element) { //มีตัวในอาเรย์ที่มีค่ามากกว่า10มั้ย
    return element > 10;
  }

console.log([2, 5, 8, 1, 4].some(isBiggerThan10))  // false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)) // true
console.log(`__________________________________________\n`)



// Inline callback function

const nums = [-20,-10,0,10,20]
const oneNegative = nums.some(function (num){  
    return num<0
})
console.log(oneNegative) // true
