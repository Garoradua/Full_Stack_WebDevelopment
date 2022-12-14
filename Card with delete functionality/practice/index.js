// // // console.log("Hello JS");
// // // var x=5;
// // // console.log(x);

// // // console.log('Javascript is so "Cool"');

// // console.log(true + false)  // 1
// // console.log(12 / "6") // 2
// // console.log("number" + 15 + 3) //number1513
// // console.log(15 + 3 + "number")
// // console.log(1 > null) //true
// // console.log("foo" + + "bar") //foo bar
// // console.log('true' == true) // 1
// // console.log(false == 'false') // 1
// // console.log(null == '') // true
// // console.log(!!"false" == !!"true") // false

// function StudentSum(arr){
//     var sum=0;
//     for(var i=0; i<arr.length; i++){
//         sum+= arr[i];
//     }

//     console.log(sum);
// }

// StudentSum([10,20,30,40,50]);
// var i = 3;
// setInterval(function(){
    
//     var listItem = document.createTextNode(i +" item");
//     i++;
//     console.log(listItem);
//     var childItem = document.createElement("li");
//     console.log(childItem);
//     childItem.appendChild(listItem);
//     var mainList = document.getElementById("main-list");
//     console.log(mainList);
//     childItem.style.color= "black";
//     mainList.appendChild(childItem);
// },1000000);
var listItems = document.getElementsByTagName("ol");
listItems.style.color = "blue";
console.log(listItems);



