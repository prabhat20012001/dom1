// traversing the dom
// var itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


// parentElement
// console.log(itemList.parentElement);
//  itemList.parentNode.style.backgroundColor='#f4f4f4';
//  console.log(itemList.parentElement.parentElement.parentElement);



// child nodes

// console.log(itemList.childNodes)

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1'

// lASTChild
// console.log(itemList.lastChild)
// lastElement
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello 4"

// nextSibling
// console.log(itemList.nextSibling)
// // nextElementsibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previousElementsibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color="red";

// create element 


// create a div
var newDiv=document.createElement("div");
// add class
newDiv.className="hello";

// add id
newDiv.id="hello1";

// add attr
newDiv.setAttribute("title","Hello div");
// create text node
var newDivText=document.createTextNode("Hello world");

// Add text to div
newDiv.appendChild(newDivText);
var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");
console.log(newDiv);
newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);
