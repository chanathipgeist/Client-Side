// const { template } = require('@babel/core')
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

//64130500012 Chanathip Buppanhasamai
function paginateManagement(items, rows) {
  const rowsPerPage = rows // Constant Variables:
  const products = items // Constant Variables:

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const itemsOfCurrentPage = getItemsOfCurrentPage(
      products, 
      currentPageNumber, 
      rowsPerPage
      )//โชว์Itemทั้งหมดในหน้าปัจจุบัน
    const productsUl = document.getElementById('products')//หาelementที่มีไอดีคือ'products'เพื่อทำให้มันเป็นparent
    itemsOfCurrentPage.forEach((item) => {//ทำการloopโชว์itemที่อยู่ในitemsOfCurrentPage
      const liElement = document.createElement('li')//สร้างelement<li>
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`//ตั้งTextใน<li>
      productsUl.appendChild(liElement)//เอาเข้าไปในparent
    })
  }



  const pageHandler = (event) => {
    const pagesStyle = document.querySelectorAll('button')//ค้นหาปุ่ม เพื่อเข้าถึงการทำงาน
    pagesStyle.forEach((page) => (page.style = 'border: 1px solid #999')) //ทำการloopโชว์pageที่อยู่ในpagesStyle และเปลี่ยนstyleให้เป็นตามโจทย์
    
    const productsUl = document.getElementById('products') //หาelementที่มีไอดีคือ'products'เพื่อเข้าถึงและทำการsetค่าต่อไป
    productsUl.textContent = '' //ตั้งค่าให้Textเป็นว่าง เพื่อเวลาเปลี่ยนหน้าจะได้รีเซ็ตอันเก่าๆออก

    const currentPage = event?.target.id ?? 1 //สร้างcurrentPage มารับTarget.Id(Idตัวที่เรากำลังกด) และเช็คtargetว่าเป็นundefinedมั้ย ถ้าใช่ก็ให้เป็น1
    showItemsOfCurrentPage(currentPage) //โชว์Item ที่currentPage 
    
    const targetPageButton = document.getElementById(currentPage)//หาelementที่มีไอดีคือcurrentPage(currentPageคือ )
    targetPageButton.style = 'background-color: LightSteelBlue' //set styleตามโจทย์บอก

  }


  const showPageNumbers = () => {
   const totalPages= getTotalPages(products,rowsPerPage) //เอาตัวแปรมารับค่าในฟังก์ชัน
    const paginateDiv=document.querySelector(".pagination") //หาelementที่คลาสชื่อ"pagination"
    for(let i=1; i<=totalPages; i++) { //วนloopสร้างปุ่มตามจำนวนTotalPage(TotalPageจะบอกว่าเรามีทั้งหมดกี่หน้า)
    const buttonElement = document.createElement('button')//สร้างelementปุ่ม
    buttonElement.textContent = i //ตั้งTextในbuttonให้เป็นตัวเลขที่กำลังloop
    buttonElement.setAttribute('id',i) //ตั้งค่าIdให้ตรงกับตัวเลขที่กำลังloop
    paginateDiv.appendChild(buttonElement) //ให้ปุ่มที่เราสร้างไปเป็นลูกของpaginateDivที่เป็นparent
       buttonElement.addEventListener('click',pageHandler)//addEventให้ปุ่ม และให้มันไปทำงานที่ฟังก์ชันpageHandler
  }
 

  }


  
  return {
    showPageNumbers,
    pageHandler
  }

}


// module.exports = paginateManagement
export { paginateManagement }
const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
showPageNumbers()
pageHandler()
