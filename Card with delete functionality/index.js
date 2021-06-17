/* <body>
    <input id="input-box" placeholder="type Names"  />
    
</body> */

var inputBox = document.getElementById("input-box");

var mainCard = document.getElementById("main-card");
var cDate = new Date();

var fromLocalStorage = localStorage.getItem("todo-list") == null ? [] : JSON.parse(localStorage.getItem("todo-list"));
for(i=0; i<fromLocalStorage.length; i++){
    TODOrender(fromLocalStorage[i].message, fromLocalStorage[i].time);
}



function TODOrender(message, date){
var upperDiv = document.createElement("div");
    upperDiv.id = "upper-div";

    var innerDiv = document.createElement("div");
    innerDiv.className = "inner-div";

    var heading = document.createElement("h3");
    heading.innerHTML = message;

    var paragraph = document.createElement("p")
    var cDate = new Date();
    paragraph.innerHTML = date;
    var icon = document.createElement("i");
    icon.className = "fas fa-trash-alt";

    innerDiv.appendChild(heading);
    innerDiv.appendChild(paragraph);
    upperDiv.appendChild(innerDiv);
    upperDiv.appendChild(icon);

    mainCard.appendChild(upperDiv);
    inputBox.value="";


icon.onclick = function(){
    upperDiv.remove();
}
}




// var mArr={
//     key: heading.innerHTML
// }

// localStorage.setItem("input-value", JSON.stringify(mArr));
// var storedItem = localStorage.getItem("input-value");
// console.log(JSON.parse(storedItem)); 





inputBox.addEventListener("keypress", function(e){
if(e.key=="Enter"){
    // <!-- <div id="upper-div">
    //     <div class="inner-div" >
    //         <h3> Buy Apples </h3>
    //         <p> Date </p>
    //     </div>
    //     <i class="fas fa-trash-alt"></i>
    // </div> -->
    if(inputBox.value == ""){
        alert("Null Item");
        return;
    }
    var date = cDate.getDate() + "-" + (parseInt(cDate.getMonth()) + 1) + "-" +cDate.getFullYear();
    var mArr = localStorage.getItem("todo-list") == null ? [] : JSON.parse(localStorage.getItem("todo-list"));
    mArr.push({
    message: inputBox.value,
    time: date
    
        })

localStorage.setItem("todo-list", JSON.stringify(mArr));

TODOrender(inputBox.value, date);  
}
  

})

// inputBox.addEventListener("keypress", function(e){
//     // inputBox.addEventListener("keypress", function(){
//         if(e.key == "Enter"){
//         console.log(e);
//         }
// }

