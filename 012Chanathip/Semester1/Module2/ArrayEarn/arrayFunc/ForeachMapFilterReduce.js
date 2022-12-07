//initial student
let student = ['Tus', 'Earn', 'Geist', 'Ploy'];

///////////////////////////////////////////////////////////////
//foreach เข้าถึงทุก element ไม่ return
//forEach((element, index, array) => { ... } )
let studentForeach = [];
student.forEach((element, index, array) => {
    studentForeach[index] = (`${element}[${index}] : from ${array[index]}`);
});
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//map เข้าถึงทุก element และ return เป็น array
//map((element, index, array) => { ... })
let studentMap = student.map((element, index, array) => `${element}[${index}] : from ${array[index]}`);
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//filter เข้าถึงทุก element และ return ค่าที่ใน function return true และ return เป็น Array
//filter((element, index, array) => { ... } )
let studentFilter = student.filter((element) => element.length > 3);
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//reduce
//reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
let arr = [1, 3, 5, 7, 8];
let studentReduce = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//Menu
console.log(student);
console.log(studentForeach);
console.log(studentMap);
console.log(studentFilter);
console.log(studentReduce);
///////////////////////////////////////////////////////////////