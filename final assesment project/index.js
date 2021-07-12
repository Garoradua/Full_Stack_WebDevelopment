$(document).ready(function () {
    
    var uname = $(".LoginPage-InputField-user")
    var pword = $(".LoginPage-InputField")
    var user = uname.val();
    var pass =pword.val();
    var loginBtn = $(".LoginPage-Button");
    $(loginBtn).click(function (e) {
       e.preventDefault();
       if(uname.val() == "qaifi" && pword.val() == "qaifi"){
          
           alert("login succesfull")
           localStorage.setItem("loginStatus",true);
           var url = './orders.html';
           location.href = url;
       }else{
        console.log(user+" and "+pass)
           alert("Please give the correct Username And Password")
       }
       
    
    });

    var productData = $("#product-data");
    var userData = $("#user-data")
    var orderData = $("#order-data");
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",function (data) {
            for(var i=0; i<data.length;i++){
            var row = document.createElement("tr");
            row.className = "Homepage_TableRow";
            var rowId = document.createElement("td");
            rowId.className = "Homepage_SecondaryText";
            rowId.innerHTML = data[i].id;            
            var rowName = document.createElement("td");
            rowName.className = "Homepage_PrimaryText";
            rowName.innerHTML = data[i].customerName;
            var rowDate = document.createElement("td");
            rowDate.className = "Homepage_PrimaryText";
            rowDate.innerHTML = data[i].orderDate;
            rowDate.appendChild(document.createElement("br"));
            var rowTime = document.createElement("span");
            rowTime.className = "Homepage_SecondaryText";
            rowTime.innerHTML = data[i].orderTime;
            rowDate.appendChild(rowTime);
            var rowAmount = document.createElement("td");
            rowAmount.className = "Homepage_SecondaryText";
            rowAmount.innerHTML = data[i].amount;            
            var rowStatus = document.createElement("td");
            rowStatus.className = "Homepage_PrimaryText";
            rowStatus.innerHTML = data[i].orderStatus;
            row.appendChild(rowId);
            row.appendChild(rowName);
            row.appendChild(rowDate);
            row.appendChild(rowAmount);
            row.appendChild(rowStatus);

            orderData.append(row);
        } 
        });
       
        $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",function (data) {
            for(var i=0; i<data.length;i++){
            var row = document.createElement("tr");
            row.className = "Homepage_TableRow";
            var rowId = document.createElement("td");
            rowId.className = "";
            rowId.innerHTML = data[i].id;            
            var rowProfilePic = document.createElement("td");
            rowProfilePic.className = "Homepage_SecondaryText";
            var pic = document.createElement("img");
            pic.src=data[i].profilePic;
            rowProfilePic.appendChild(pic);
            var rowFullName = document.createElement("td");
            rowFullName.className = "Homepage_PrimaryText";
            rowFullName.innerHTML = data[i].fullName;
            var rowDob = document.createElement("td");
            rowDob.className = "Homepage_SecondaryText";
            rowDob.innerHTML = data[i].dob;
            var rowGender = document.createElement("td");
            rowGender.className = "Homepage_PrimaryText";
            rowGender.innerHTML = data[i].gender;            
            var rowCurrentCity = document.createElement("td");
            rowCurrentCity.className = "Homepage_SecondaryText";
            rowCurrentCity.innerHTML = (data[i].currentCity + " ," + data[0].currentCountry);
            row.appendChild(rowId);
            row.appendChild(rowProfilePic);
            row.appendChild(rowFullName);
            row.appendChild(rowDob);
            row.appendChild(rowGender);
            row.appendChild(rowCurrentCity);
            userData.append(row);
        } 
    });
    
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",function (data) {
        for(var i=0; i<data.length;i++){
        var row = document.createElement("tr");
        row.className = "Homepage_TableRow";
        var rowId = document.createElement("td");
        rowId.className = "Homepage_SecondaryText";
        rowId.innerHTML = data[i].id;           
        var rowMedicineName = document.createElement("td");
        rowMedicineName.className = "Homepage_PrimaryText";
        rowMedicineName.innerHTML = data[i].medicineName;
        var rowMedicineBrand = document.createElement("td");
        rowMedicineBrand.className = "Homepage_PrimaryText";
        rowMedicineBrand.innerHTML = data[i].medicineBrand;
        // rowDate.appendChild(document.createElement("br"));
        var rowExpiryDate = document.createElement("td");
        rowExpiryDate.className = "Homepage_SecondaryText";
        rowExpiryDate.innerHTML = data[i].expiryDate;
        var rowUnitPrice = document.createElement("td");
        rowUnitPrice.className = "Homepage_PrimaryText";
        rowUnitPrice.innerHTML = ("$" + data[i].unitPrice);            
        var rowStock = document.createElement("td");
        rowStock.className = "Homepage_SecondaryText";
        rowStock.innerHTML = (data[i].stock);
        row.appendChild(rowId);
        row.appendChild(rowMedicineName);
        row.appendChild(rowMedicineBrand);
        row.appendChild(rowExpiryDate);
        row.appendChild(rowUnitPrice);
        row.appendChild(rowStock);
        productData.append(row);
    } 
});
var searchBox = $(".UserList_SearchBox");
// var itemTo = searchBox.val();

var myInput = document.getElementById("myInput");
myInput.addEventListener("keyup", function(){

      var itemTo = myInput.value;
      var api = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName="+ itemTo;
      $.get(api,function (data) {        
          
            for(var i=0; i<data.length;i++){
            var row = document.createElement("tr");
            row.className = "Homepage_TableRow";
            var rowId = document.createElement("td");
            rowId.className = "";
            rowId.innerHTML = data[i].id;            
            var rowProfilePic = document.createElement("td");
            rowProfilePic.className = "Homepage_SecondaryText";
            var pic = document.createElement("img");
            pic.src=data[i].profilePic;
            rowProfilePic.appendChild(pic);
            var rowFullName = document.createElement("td");
            rowFullName.className = "Homepage_PrimaryText";
            rowFullName.innerHTML = data[i].fullName;
            // rowDate.appendChild(document.createElement("br"));
            var rowDob = document.createElement("td");
            rowDob.className = "Homepage_SecondaryText";
            rowDob.innerHTML = data[i].dob;
            var rowGender = document.createElement("td");
            rowGender.className = "Homepage_PrimaryText";
            rowGender.innerHTML = data[i].gender;            
            var rowCurrentCity = document.createElement("td");
            rowCurrentCity.className = "Homepage_SecondaryText";
            rowCurrentCity.innerHTML = (data[i].currentCity + " ," + data[0].currentCountry);
            row.appendChild(rowId);
            row.appendChild(rowProfilePic);
            row.appendChild(rowFullName);
            row.appendChild(rowDob);
            row.appendChild(rowGender);
            row.appendChild(rowCurrentCity);
            userData.append(row);
       console.log(data);
            }
    });
});
    
    

// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }





});