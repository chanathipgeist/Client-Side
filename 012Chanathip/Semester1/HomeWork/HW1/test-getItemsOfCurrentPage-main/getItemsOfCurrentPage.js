
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if(allItems===null||allItems===undefined)return undefined
  if(allItems.length===0)return [ ]
  if(rowsPerPage<=0)return allItems
  if(currentPage<=0)return allItems
  return allItems.slice((currentPage*rowsPerPage)-rowsPerPage,(currentPage*rowsPerPage))
}

function lovePloy(name){
  return  ` ${name} love Ploy`
}

module.exports ={ getItemsOfCurrentPage,}
