const product = require('./data.json');
//console.log(product)
function productAdd(id){
    // ค้นหา Product ที่มี id ตรงกับที่ต้องการที่อยู่ใน array product return obj ของ product
    return product.filter(p => p.id === id)
}

// console.log(productAdd(1))
// code here 
class myCart{
  static ids =1
constructor(firstname,lastname){
    this.firstname=firstname
    this.lastname=lastname
    this.id=myCart.ids++
    this.arr=[]
}

getUser(){
    return this.id+' '+this.firstname+' '+this.lastname
}

setFirstname(firstname){
    this.firstname=firstname
}

setLastname(lastname){
    this.lastname=lastname
}

addProduct(id){
  const item = productAdd(id)
  return  this.arr.push({id:item[0].id, name:item[0].title ,cost:item[0].price ,amount:1})
}

increaseProduct(id,ins=1){
   const item = this.arr.find(p=>p.id===id)
    item.amount=item.amount+ins
    
}

decreaseProduct(id,ins=1){
    const item = this.arr.find(p=>p.id===id)
     item.amount=item.amount-ins
 }

 removeProduct(id){
    return this.arr=this.arr.filter(item=>item.id!==id)
 }

searchProduct(id){
  return  this.arr.find(item=>item.id===id)
}

showAllProdut(){
    return this.arr
}

getPriceAll(){

    const sum = this.arr.reduce((total, now) => {
        return total + now.cost * now.amount
    }, 0.00)
    return  sum
   
}

}


const o1=new myCart()
o1.setFirstname("Uma")
o1.setLastname("Mi")
o1.addProduct(1)
o1.addProduct(2)
o1.increaseProduct(1,2)
console.log(o1.showAllProdut())
console.log(o1.getUser())
console.log(o1.getPriceAll())

const o2=new myCart()
o2.addProduct(1)
o2.setFirstname("Mayan")
o2.setLastname("Pantae")
// console.log(o2.getUser())

// สร้าง คลาส myCart เพื่อเก็บข้อมูลตะกร้าสินค้า *
// มี constarctor 1 ตัวรับ firstname *
// และ id ที่ไม่ซ้ำกัน (เพิ่มอัตโนมัติ) *
// สร้าง อาร์เรย์เก็บ Object ที่แสดงข้อมูล ชื่อ Product ราคา จำนวนของแต่ละรายการ *

// สร้าง function ในการแสดงข้อมูลของผู้ใช้งาน *

// สร้าง function ในการเปลี่ยนชื่อผู้ใช้งาน *

// สร้าง function ในการเพิ่ม Product ไปในตระกร้าสินค้า *

// สร้าง function ในการเพิ่มจำนวนสินค้าที่มีอยู่ในตะกร้าตามไอดี *

// สร้าง function ในการลดจำนวนสินค้าที่มีอยู่ในตะกร้าตามไอดี *

// สร้าง function ลบสินค้าสินค้าที่มีอยู่ในตะกร้าตามไอดี *

// สร้าง function ค้นหาสินค้าที่มีในตะกร้าโดยรับไอดีเข้ามา *

// สร้าง function แสดงสินค้าทั้งหมดในตะกร้า  *

// สร้าง function แสดงราคารวมของสินค้าทั้งหมดในตะกร้า 

//addTocart(productAdd(id))

