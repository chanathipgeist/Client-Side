const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
class BookMark {
    constructor(isbn, totalPages=0){
this.isbn=isbn
this.totalPages=totalPages
this.bookMarks=[]
    }

addBookMark(pageNumber){
if(pageNumber>=1&&pageNumber<=this.totalPages){
    this.bookMarks.push(pageNumber)
}
return this.bookMarks.length
}
removeBookMark(pageNumber){
const beforeRemoveLength=this.bookMarks.length
this.bookMarks=this.bookMarks.filter(bookmark => bookmark!=pageNumber)//bookmarkคือelementในarray
if(this.bookMarks.length===beforeRemoveLength){
    return undefined
}
return pageNumber
}
goToFirstBookMark(){
return this.bookMarks[0]
}
goToLastBookMark(){
    return this.bookMarks[this.bookMarks.length-1]

}
getBookMarks(){
return this.bookMarks
}
}
module.exports = BookMark
//9.26.93
















































// const { template } = require('@babel/core')
// //64130500012 Chanathip
// class BookMark {
//   constructor(isbn, totalPages=0){
//     this.isbn=isbn
//     this.totalPages=totalPages
//     this.bookMarks=[]
//   }
//   getBookMarks(){
//     return this.bookMarks
//   }
//   addBookMark(pageNumber){
//     if(pageNumber>=1&&pageNumber<=this.totalPages){
//       this.bookMarks.push(pageNumber)
//     }
//     return this.bookMarks.length
//   }

//   removeBookMark(pageNumber){
//     const beforeRemoveLength=this.bookMarks.length
//     this.bookMarks=this.bookMarks.filter(bookmark=>bookmark!=pageNumber)
//     if(this.bookMarks.length===beforeRemoveLength){
//       return undefined
//     }else{
//       return pageNumber
//     }
//   }

//   goToFirstBookMark(){
//     if(this.bookMarks.length===0){
//       return undefined
//     }
//     return this.bookMarks[0]
//   }

//   goToLastBookMark(){
//     if(this.bookMarks.length===0){
//       return undefined
//     }
//     return this.bookMarks[this.bookMarks.length-1]

//   }






// }
// module.exports = BookMark





























































// const { template } = require('@babel/core')
// //64130500012
// class BookMark {
//   //code here.
// constructor(isbn, totalPages=0){
// this.isbn=isbn
// this.totalPages=totalPages
// this.bookMarks=[]
// }

// addBookMark(pageNumber){
// if(pageNumber>=1&&pageNumber<=this.totalPages)
// this.bookMarks.push(pageNumber)
//   return this.bookMarks.length
// }

// removeBookMark(pageNumber){
//    const beforeRemoveLength=this.bookMarks.length
//    this.bookMarks=this.bookMarks.filter(bookmark=>bookmark!=pageNumber)
//   if(this.bookMarks.length===beforeRemoveLength){
//     return undefined
//   }else{
//     return pageNumber
//   }
// }

// goToFirstBookMark(){
//   if(this.bookMarks.length===0)return undefined
// return this.bookMarks[0]
// }

// goToLastBookMark(){
//   if(this.bookMarks.length===0)return undefined
// return this.bookMarks[this.bookMarks.length-1]
// }

// getBookMarks(){
// return this.bookMarks
// }

// }

// module.exports = BookMark





































// const { template } = require('@babel/core')
// //64130500012 Chanathip Buppanhasamai
// class BookMark {
//  constructor(isbn, totalPages=0){
//   this.isbn=isbn
//   this.totalPages=totalPages
//   this.bookMarks=[]
//  }
//  getBookMarks(){
//   return this.bookMarks
//  }
//  addBookMark(pageNumber){
//   if(pageNumber>=1 && pageNumber<=this.totalPages)
//     this.bookMarks.push(pageNumber)
//   return this.bookMarks.length
//  }
//  goToFirstBookMark(){
//   return this.bookMarks[0]
//  }
//  goToLastBookMark(){
//   return this.bookMarks[this.bookMarks.length-1]
// } 
// removeBookMark(pageNumber){
//   const beforeRemoveLength=this.bookMarks.length
//   this.bookMarks=this.bookMarks.filter(bookmark=>bookmark!=pageNumber)
//   return this.bookMarks.length===beforeRemoveLength?undefined:pageNumber
// }
// }
// module.exports = BookMark


// const { template } = require('@babel/core')
// //64130500012 Chanathip Buppanhasamai
// class BookMark {
//   constructor(_isbn,totalPages_=0){
//     this._isbn=_isbn
//     this.totalPages_=totalPages_
//     this.BookMarks=[]
//   }

//   addBookMark(_pageNumber_){
//     if(_pageNumber_>=1 &&_pageNumber_<=this.totalPages_)
//     this.BookMarks.push(_pageNumber_)  
//     return this.BookMarks.length
//   }

//   removeBookMark(_pageNumber_){
//     for(let item of this.BookMark){
//       if(item===_pageNumber_){
//         this.BookMarks.splice(_pageNumber_,1)
//       }else{
//         return undefined
//       }
//   }
//   }

//   goToFirstBookMark(){
//     return this.BookMarks[0]
//   }

//   goToLastBookMark(){
//     return this.BookMarks[this.BookMark.length-1]
//   }

//   getBookMarks(){
//     return this.BookMarks
//   }

// }
// module.exports = BookMark