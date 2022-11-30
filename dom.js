// var item=document.querySelector(".list-group-item:nth-child(2)");
// item.style.backgroundColor="green" ;

// var item=document.querySelector(".list-group-item:nth-child(3)");
// item.style.color="white";

// Using QuerySelectorALL change the font color to green for 2nd item in the item list
// Choose all the odd elements and make their background green using QuerySelectorALL﻿

var item=document.querySelectorAll(".list-group-item");
item[1].style.color="green";

// var odd=document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.background="black";
// }