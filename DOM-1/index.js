console.log("script loaded!");
var unorderedList = document.getElementById("menu-list");
console.log(unorderedList);

var innerList = document.getElementsByClassName("list-items");

console.log(innerList[1]);

console.log(unorderedList.innerText);
console.log(unorderedList.innerHTML);

var mainCount = document.getElementById("main-count");
mainCount.innerText = 250;