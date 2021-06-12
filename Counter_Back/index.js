var count = document.getElementById("counter");
// console.log(count);
// console.log(count.innerText);

// WAY 1
// var increaseCounter = true;
// window.setInterval(function(){
//     if(count.innerHTML==0){
//     increaseCounter = false;
//     }else if(count.innerHTML==3){
//         increaseCounter = true;
//     }
//     if(increaseCounter == true){
//         count.innerHTML--;
//     }else{
//         count.innerHTML++;
//     }

// }, 1000);

// WAY 2 (classroom )
var increaseCounter = true;
window.setInterval(function(){
    var counts = parseInt(count.innerHTML)
    if(counts==0){
    increaseCounter = false;
    }else if(counts==3){
        increaseCounter = true;
    }
    if(increaseCounter == true){
        counts-=1;
    }else{
        counts+=1;
    }
    count.innerHTML = counts;
}, 1000);