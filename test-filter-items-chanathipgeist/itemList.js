import { products } from './data/products.js'
// const { template } = require('@babel/core')
// const products = require('./data/products.js')

//64130500012 Chanathip Buppanhasamai
function itemList(userItems) {
  const items=userItems
  
  const initialPage = () => {
const input=document.getElementsByTagName('input')[0]
// console.log(inputValue)  
input.addEventListener('input',filterItemsHandler)
showItems(items)
}

  const filterItemsHandler = (event) => {
    const inputValue=event.target.value
    // console.log(inputValue)
    const filterValue=items.filter(item=>{
      return item.keywords.toUpperCase().includes(inputValue.toUpperCase())
    })
    showItems(filterValue)
  }

  const showItems = (items) => {
  const ulitem=document.getElementById('items')
  ulitem.textContent=''

  items.forEach(product => {
  const ulProduct=document.createElement('li')
  ulProduct.textContent=`ID:${product.id}, NAME:${product.name}, KEYWORDS:${product.keywords}`
  ulitem.appendChild(ulProduct)
});  
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
// module.exports = itemList
export { itemList }
const { initialPage, filterItemsHandler, showItems } = itemList(products)
initialPage()
