console.log("script loaded!");
// var unorderedList = document.getElementById("menu-list");
// console.log(unorderedList);

// var innerList = document.getElementsByClassName("list-items");

// console.log(innerList[1]);

// console.log(unorderedList.innerText);
// console.log(unorderedList.innerHTML);

// var mainCount = document.getElementById("main-count");
// mainCount.innerText = 250;

// var countInterval = window.setInterval(function(){
//     if(mainCount.innerHTML>0){
//     mainCount.innerHTML -=1;
    
//     }else{
//         clearInterval(countInterval);
//     }
//     console.log("1-second");
// }, 1000)

// var newListItem = document.createElement("li")
// console.log(newListItem);
// var textNode = document.createTextNode("seven");
// console.log(textNode);
// newListItem.appendChild(textNode);
// console.log(newListItem);
// var menuList = document.getElementById("menu-list");
// menuList.appendChild(newListItem);
// console.log(menuList);



// var newListItem = document.createElement("li")
// console.log(newListItem);
// // var textNode = document.createTextNode("seven");
// // console.log(textNode);
// // newListItem.appendChild(textNode);
// newListItem.innerHTML = "seven";
// console.log(newListItem);
// var menuList = document.getElementById("menu-list");
// menuList.appendChild(newListItem);
// console.log(menuList);

var fruits = ["apple", "magoes", "pineapple"];

for(i=0; i<fruits.length; i++){
    var newListItem = document.createElement("li");
    newListItem.innerHTML = fruits[i];
    newListItem.id = i;
    newListItem.className = "list-items new-class";
    // newListItem.style.fontSize = "30px";
    // newListItem.style.color = "red";
    console.log(newListItem);
    var menuList = document.getElementById("menu-list");
menuList.appendChild(newListItem);
}

var listItem2 = document.getElementById("2");
listItem2.remove();
console.log(listItem2);