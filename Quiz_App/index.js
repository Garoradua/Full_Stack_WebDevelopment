{/* <form id="quiz-form">    
<p id = "question-bar"><b>Q1. Please select your age:</p></b>
<input type="radio" id="age1" name="age" value="30">
<label for="age1">0 - 30</label><br>
<input type="radio" id="age2" name="age" value="60">
<label for="age2">31 - 60</label><br>  
<input type="radio" id="age3" name="age" value="100">
<label for="age3">61 - 100</label><br><br>
<!-- <input type="submit" value="Submit"> -->
</form> */}


var quizForm = document.getElementById("quiz-form");
var questionBar = document.getElementById("question-bar");
var http = new XMLHttpRequest;
http.open("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz");
http.send();