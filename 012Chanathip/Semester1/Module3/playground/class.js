
class Girlfriend{
     count=0
    constructor(firstname,lastname,id='64130500000'){
        this.firstname=firstname
        this.lastname=lastname
        this.id=id
        this.stocks=[]
        this.num=this.count++
    }
getFristname(){
return this.firstname
}
getLastname(){
return this.lastname
}
addToStock(fitstname,lastname,id){
    
    return this.stocks.push({fitstname,lastname,id})
}
getStock(){
    return this.stocks
}
firstGirlfriend(){
    return this.stocks.shift()
}
searchGirlfriend(firstname){
    return this.stocks.find((girl)=>girl.firstname!==firstname)
}
}


class Boyfriend{
    count=0
   constructor(firstname,lastname,id='64130500000'){
       this.firstname=firstname
       this.lastname=lastname
       this.id=id
       this.stocks=[]
       this.num=this.count++
   }
getFristname(){
return this.firstname
}
getLastname(){
return this.lastname
}
addToStock(fitstname,lastname,id){
   
   return this.stocks.push({fitstname,lastname,id})
}
getStock(){
   return this.stocks
}
firstBoyfriend(){
   return this.stocks.shift()
}
searchBoyfriend(firstname){
   return this.stocks.find((girl)=>girl.firstname!==firstname)
}
}
// module.exports= {Girlfriend,Boyfriend}
export {Girlfriend,Boyfriend}