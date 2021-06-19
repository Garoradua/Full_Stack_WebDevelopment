/* <div id="card1" class="playlist-card active-card">
<img class="thumbnail" src="https://i.vimeocdn.com/video/600595198_390x220.webp">
<h3>Croissants | Flour and Stone</h3>
</div> --> */

var playlistWrapper = document.getElementById("playlist-wrapper");
var videoPlayer = document.getElementById("video-player");
videoPlayer.src = "https://player.vimeo.com/video/190062231";
var http = new XMLHttpRequest;
http.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", true);
http.send()
http.onreadystatechange = function(){
    if(http.readyState==4){
    var response = JSON.parse(this.responseText);
    // console.log(response);
    for(var i=0; i<response.length; i++){
 var playlistCard = document.createElement("div");
 playlistCard.className = "playlist-card";
 var pic = document.createElement("img");
 pic.className = "thumbnail";
 pic.src = response[i].thumbnail;
 var heading = document.createElement("h3");
 heading.innerHTML = response[i].title;
 playlistCard.appendChild(pic);
 playlistCard.appendChild(heading);
playlistWrapper.appendChild(playlistCard);
    }
// playlistCard.addEventListener("click",function(){
//     if(response[1].id==2){
//         alert("hi");
//     }
// });
  
    }
}
// https://5d76bf96515d1a0014085cf9.mockapi.io/video/
