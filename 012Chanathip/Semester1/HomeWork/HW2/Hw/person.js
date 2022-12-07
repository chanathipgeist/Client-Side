class Person{
constructor(firstName="N/A",lastName="N/A",dateOfBirth=new Date(Date.now())){
this.firstName=firstName
this.lastName=lastName
this.dateOfBirth=dateOfBirth
}

getFullName(){
    return `${this.lastName}, ${this.firstName}`
}

getAge(){
    const diff_ms=Date.now()-this.dateOfBirth.getTime()
        const diff_date=new Date(diff_ms)
        return diff_date.getUTCFullYear()-1970
}
}

const p1=new Person('Somchai','Deejai', new Date(1999,0,30))
console.log(p1.getFullName())
console.log(p1.getAge())
const p2=new Person('somchai','deejai', new Date(2000,0,30))
console.log(p2.getFullName())
console.log(p2.getAge())

Person.prototype.isEqual=function(anotherPerson){
    return this.firstName?.toLowerCase()===anotherPerson?.firstName?.toLowerCase() && this?.lastName?.toLowerCase() ===anotherPerson?.lastName?.toLowerCase()
}


Person.prototype.toString=function (){
    return `fullname:${this.getFullName()}, age: ${this.getAge()}`}