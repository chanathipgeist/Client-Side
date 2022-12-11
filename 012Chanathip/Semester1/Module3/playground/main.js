// const {Girlfriend,Boyfriend} = require('./class.js')
import { Girlfriend , Boyfriend } from "./class.js"
const no1 = new Girlfriend()
no1.addToStock('Wanasanan','Tri-apibanwongsa','65130500070')
no1.addToStock('Prapassorn','Toopprateep','65130500071')
no1.addToStock('Thanaporn','Panyanapas','65130500072')
// console.log(no1.getStock())
// console.log(no1.firstGirlfriend())
console.log(no1.searchGirlfriend('Wanasanan'))

const ployGirlFriend = new Boyfriend()
ployGirlFriend.addToStock('Chanathip','Buppanhasamai','64130500012')
ployGirlFriend.addToStock('Chanathippudes','Buppanhasamaiimo','64130500013')
console.log(ployGirlFriend.firstBoyfriend())


const rootNode=window.document
