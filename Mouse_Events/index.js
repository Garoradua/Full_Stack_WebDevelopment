var mouseDesign = document.getElementById("mouse-design");
mouseDesign.addEventListener("mouseover", function(){
    console.log("Mouse over!!");
})

mouseDesign.addEventListener("click", function(){
    console.log("Mouse click!!");
})

mouseDesign.addEventListener("mouseout", function(){
    console.log("Mouse out!!");
})

mouseDesign.addEventListener("mousemove", function(){
    console.log("Mouse Move!!");
})

mouseDesign.addEventListener("dblclick", function(){
    console.log("Mouse double click!!");
})