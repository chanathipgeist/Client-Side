// const { template } = require('@babel/core')
// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'


//your student id, firstname, and lastname here
function paginateManagement(items, rows) {
const products=items
const rowsPerPage=rows

  const showItemsOfCurrentPage = (currentPageNumber) => {

  }

  const pageHandler = (event) => {
 
}

  
  const showPageNumbers = () => {

   }

  }


  return {
    showPageNumbers,
    pageHandler
  }
}
// module.exports = paginateManagement
export { paginateManagement }
const { showPageNumbers,  pageHandler } =
  paginateManagement(products, 10)
showPageNumbers()
pageHandler()
