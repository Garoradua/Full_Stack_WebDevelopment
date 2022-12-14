console.log("Hello World");

var apiTitle = document.getElementById("title");
// https://api.github.com/users
var http = new XMLHttpRequest();
http.open("get",'https://api.github.com/users', true);
http.onreadystatechange = function(){
    if(this.readyState==3){
        console.log("Loading");
    }
    if(this.readyState==4){
    console.log(this.response.length);
    console.log(JSON.parse(this.response));
    for(var i=0; i<this.response.length; i++){
    console.log(JSON.parse(this.response)[0]);
    var img = document.createElement("img");
    img.src = JSON.parse(this.response)[i].avatar_url;
    apiTitle.appendChild(img);
    }
}
}
http.send();


































// fetch('https://api.github.com/users').then((response)=>response.json()).then((data)=>{
//     var len = data.length;
//     for(var i=0; i<len; i++){
//         var title = document.createElement("p");
//         title.innerHTML = data[i].login;
//         apiTitle.appendChild(title);
//     }
// });