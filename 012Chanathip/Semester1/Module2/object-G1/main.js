// 1. 
// let profile ={
//     id:123,
//     interests: ['music','skiing']
// }

// console.log(profile.interests)//show object
// console.log(profile['interests'])//show object
// profile.interests[profile.interests.length-1]= 'reading'
// console.log(profile.interests)

// let book = { isbn: 123456789,
//             title: 'JavaScript',
//             author: {
//                  firstname: 'Umaporn',
//                  lastname:   'Sup'
//              }
// } 

// book.author.firstname='Chanathip'
// book.author['lastname']='Bupp'
// console.log(book.author)

//2. using new operator to create object
class Point{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    compare(anotherPoint){
        return this.x===anotherPoint.x&&this.y===anotherPoint.y
    }
}

//  const p1=new Point(1,2)
//  let p2=new Point(1,2)
// console.log(p1.compare(p2))
// console.log(p1==p2)
// console.log(p1===p2)
// // p1=p2 //unable to reassign
// // p1.x=100
// // p1.y=50
// // p2=p1 //able to reassign

// console.log(p1.compare(p2))
// console.log(p2.compare(p1))

// console.log(Object.prototype.isPrototypeOf(p1))
// console.log(Point.prototype.isPrototypeOf(p1))


// let subject={id:1 , title:'int201'}

// console.log(Object.prototype.isPrototypeOf(subject))
// console.log(Point.prototype.isPrototypeOf(subject))

// const lecSubject= Object.create(subject)
// console.log(lecSubject)
// console.log(lecSubject.id)
// console.log(lecSubject.title)
// lecSubject.title='int999'
// console.log(lecSubject.title)

// let square1={
//     side: 5,
//     area: function(){
//         return this.side*this.side
//     }
// }
// console.log(square1.side)
// console.log(square1.area())
 
// function Square(side){
//     this.side=side
// }
// function getArea(){
//     return this.side * this.side
// }
// const sq1=new Square(3)
// console.log(sq1)
// sq1.area=getArea
// console.log(sq1.area())
// const sq2=new Square(5)
// console.log(sq2)
// sq2.area=getArea
// console.log(sq2.area())


// let book1 ={
//     isbn: 123456789,
//     title: 'JavaScript'
// }

// let bookKey= Object.keys(book1)
// let bookValue= Object.values(book1)
// console.log(bookKey)
// console.log(bookValue)















