/* <form>
            <input type="text" placeholder="add itmes .." />
            <input type="submit" value="add items" />
        </form>
        <div id="todo-list">
            <div class="list-items">
                <p>Hello apple</p>
            </div>
            <div class="list-items">
                <p>Hello apple</p>
            </div>
        </div> */


var todoList = document.getElementById("todo-list");
var buttonAdd = document.getElementById("button-add");
var textEnter = document.getElementById("text-enter");
// var deleteBtn = document.getElementsByClassName("delete-btn");
function newCardCreate(){
    var paragraph = document.createElement("p");
    paragraph.innerHTML = textEnter.value;
    var divison = document.createElement("div");
    divison.appendChild(paragraph);
    divison.classList.add("list-items");
    todoList.appendChild(divison);

    var btn = document.createElement("i");
    btn.classList.add("delete-btn");
    btn.innerHTML="delete";
    divison.appendChild(btn);
    textEnter.value ="";
    btn.addEventListener("click", function(){
        divison.remove();
    })
}
buttonAdd.onclick = function(e){
    e.preventDefault();
    if(textEnter.value==""){
        alert("Please enter value");
    }else{
        newCardCreate(textEnter.value);
    }
}

document.onmousedown = function(){
    console.log("clicked!!");
}
