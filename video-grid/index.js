console.log("script");
var videoGrid = document.getElementById("videogrid");


var connection = new XMLHttpRequest();
connection.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", true);
connection.send();

connection.onreadystatechange = function(){
    if(connection.readyState == 4){
        var response = JSON.parse(this.responseText);
        console.log(this);
        if(response.length>0){
            for(i=0; i<response.length; i++){
                var title = document.createElement("img");
                title.src = response[i].thumbnail;
                videoGrid.appendChild(title);
            }
        }
    }
}

// console.log(this);