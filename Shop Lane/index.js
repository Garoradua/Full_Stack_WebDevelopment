var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }
// console.log(productData.photos.length);
 var product = document.getElementById("product");
 var leftColumn = document.getElementById("left-column");
//  leftColumn.className = "left-column";
 var rightColumn = document.getElementById("right-column");
//  rightColumn.className = "right-column";
 var image = document.createElement("img");
 image.id = "productImg";
 image.src = productData.preview;
leftColumn.appendChild(image);
// product.appendChild(leftColumn);


var productDescription = document.createElement("div");
productDescription.className = "product-description";

var heading1 = document.createElement("h1");
heading1.id = "name";
heading1.innerHTML = productData.name;
productDescription.appendChild(heading1)

var heading4 = document.createElement("h4");
heading4.id = "brand";
heading4.innerHTML = productData.brand;
productDescription.appendChild(heading4);


var heading3 = document.createElement("h3");
heading3.innerHTML = "Price: Rs ";
var Span = document.createElement("span");
Span.id = "price";
Span.innerHTML = productData.price;
heading3.appendChild(Span);
productDescription.appendChild(heading3);

rightColumn.appendChild(productDescription);


var description = document.createElement("div");
description.class = "description";
var heading_3 = document.createElement("h3");
heading_3.innerHTML = "Description";
var para = document.createElement("p");
para.id = "description";
para.innerHTML = productData.description;
description.appendChild(heading_3);
description.appendChild(para);
productDescription.appendChild(description);




var productPreview = document.createElement("div");
productPreview.className = "product-preview";
var head = document.createElement("h3");
head.innerHTML = "Product Preview";
productPreview.appendChild(head);

var previewImg1 = document.createElement("div");
previewImg1.className = "previewImg";

for(i=0; i<productData.photos.length; i++){
    var Img = document.createElement("img");
    Img.src= productData.photos[i];
    Img.id = i+1;
    previewImg1.appendChild(Img);

    Img.addEventListener("click",function(e){
      image.src = e.target.src;
      console.log(e);
      e.target.className = "active";
    })
    // Img.className = None;
// 
}
productPreview.appendChild(previewImg1);
productDescription.appendChild(productPreview);

// var img1 = document.getElementById("1");
// var photo1 = img1.src;

// img1.addEventListener("click", function(){
//   image.src= photo1;
//   img1.className = none;
// })

// var img2 = document.getElementById("2");
// var photo2 = img2.src;

// img2.addEventListener("click", function(){
//   image.src= photo2;
//   img2.className = "active";
// })
// var img3 = document.getElementById("3");
// var photo3 = img3.src;

// img3.addEventListener("click", function(){
//   image.src= photo3;
//   img3.className = "active";
// })
// var img4 = document.getElementById("4");
// var photo4 = img4.src;

// img4.addEventListener("click", function(){
//   image.src= photo4;
//   img4.className = "active";
// })
// var img5 = document.getElementById("5");
// var photo5 = img5.src;

// img5.addEventListener("click", function(){
//   image.src= photo5;
//   img5.className = "active";
// })
// var mArr=[];
// for( i=0; i<productData.photos.length; i++){
//   mArr[i] = productData.photos[i];
//   // var "img"+i = "Hello"; 
// }
// for( i=0; i<productData.photos.length; i++){
//  console.log(mArr[[i]]);
//   // var "img"+i = "Hello"; 
// }
// img1.addEventListener("click",function(){
//   img1.className = "active";
//   image.src = mArr[0];
// })
// img2.addEventListener("click",function(){
//   img2.className = "active";
//   img1.className = none;
//   img3.className = none;
//   img4.className = none;
//   img5.className = none;
//   image.src = mArr[1];
// })
