/* <div id= "playlist-wrapper">
<!-- 
            <div id="card1" class="playlist-card active-card">
                <img class="thumbnail" src="https://i.vimeocdn.com/video/600595198_390x220.webp">
                <h3>Croissants | Flour and Stone</h3>
            </div> -->

        </div> */
// var playlistWrapper = $("#playlist-wrapper");
$(document).ready(function(){
    function videofunction(id){
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/video/"+id, function(videodata){
        $("#video-player").attr("src","https://player.vimeo.com/video/"+videodata.vimeoId);
        $("#video-title").html(videodata.title);
        $("video-description").html(videodata.description);
        $("#views-count").html(videodata.views);
      
        document.documentElement.scrollTop=0;
        $(".playlist-card").removeClass("active");
          $("#"+id).addClass("active");
    });}
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",function(response){
        var playlistWrapper = $("#playlist-wrapper");
        // console.log(response[0].title);
        for(var i=0; i<response.length; i++){
        var playlistCard = $("<div>").addClass("playlist-card").attr("id",i+1);
        if(i==0){
            playlistCard.addClass("active");
        }
        var thumbnail = $("<img>").addClass("thumbnail").attr("src",response[i].thumbnail);
        var heading = $("<h3>").html(response[i].title);
        playlistCard.append(thumbnail, heading);
        playlistWrapper.append(playlistCard);
       
        playlistCard.click(function(){
            // alert(this.id);
            // $(this.id).addClass("active");
            videofunction(this.id);
            
        })
        }
        videofunction(response[0].id);
   
    });
    
});