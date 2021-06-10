console.log("script Loaded!!");

var btnLogin = document.getElementById("btn-login");

// console.log(btnLogin);

// btnLogin.onclick = function(){
//     alert("button clicked!!");
// }

// btnLogin.addEventListener("click", function(){
//     alert("button clicked!!");
// })

var toDoInputList = document.getElementById("todo-input-list");
// console.log(toDoInputList);

// toDoInputList.addEventListener("keydown", function(){
//     console.log("keydown");
// });
// toDoInputList.addEventListener("keyup", function(){
//     console.log(toDoInputList.value);
// });
// toDoInputList.addEventListener("keypress", function(){
//     console.log("keypress");
// });

var newText = document.getElementById("new-text");

// toDoInputList.addEventListener("blur", function(e){ 
    
//     newText.innerHTML =  toDoInputList.value ;
//     // toDoInputList.value = "";

// });

// toDoInputList.addEventListener("keydown", function(g){
//     console.log(g);
// });
var mainDiv = document.getElementById("main-div");
var oneItem = document.getElementById("one-item");

btnLogin.addEventListener("click", function(e){
        console.log(toDoInputList.value);
        var newDiv = document.createElement("div");
        newDiv.innerHTML = toDoInputList.value;
        newDiv.className = "one-item";
        mainDiv.appendChild(newDiv);
   
})