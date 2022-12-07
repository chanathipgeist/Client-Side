// //root node or element node 
// const rootNode=window.document
// console.log(rootNode)
// console.log(rootNode.nodeName)
// console.log(rootNode.nodeType)
// console.log(rootNode.nodeValue)

// //root element or document element
// const rootElement=document.documentElement
// console.log(rootElement)
// console.log(rootElement.nodeName)
// console.log(rootElement.nodeType)
// console.log(rootElement.nodeValue)

// //children of HTML node
// //1.All types of children (have text)
// const htmlChildren=rootElement.childNodes
// console.log(htmlChildren)
// console.log(htmlChildren.length)
// //2.Only element types of children
// const htmlElementChildren=rootElement.children
// console.log(htmlElementChildren)
// console.log(htmlElementChildren.length)

// //document.body document.head
// const bodyNode=document.body
// const divNode=bodyNode.children[1]
// console.log(divNode) //id="App"
// console.log(divNode.getAttribute('id'))

// //query node by using getElementById()
// const divByIdNode=document.getElementById('App')
// console.log(divByIdNode)


//1.Create a new Element node "p"
const pNewElementNode=document.createElement('p')

//reduce 2+4
pNewElementNode.setAttribute('paraId',1)
pNewElementNode.setAttribute('chapt','01')
pNewElementNode.style='color:red'

// //2.Create a new attribute named "paraId"
// const paraIdNode=document.createAttribute('paraId')
// paraIdNode.value="1" //attribute value //paraId='1'


//reduce 3+5
pNewElementNode.innerHTML="<span style='color:green'>INT201</span>"

// //3.Create a text node with its value "INT201"
// const newTextNode=document.createTextNode("INT201")

//4.Assign "a" paraId to <p> element
// pNewElementNode.setAttributeNode(paraIdNode)

// //5.Assign a textnode "INT201" to <p> element
// pNewElementNode.appendChild(newTextNode) //<p paraId='1'>INT201</p>

//6.Assign <p> element to <div id="App">
const divAppNode=document.getElementById("App")
divAppNode.appendChild(pNewElementNode)

// console.log(paraIdNode.ownerElement)

const divChildren=document.body.children
console.log(divChildren)
console.log(divChildren[1].previousElementSibling)
console.log(divChildren[1].nextElementSibling)












