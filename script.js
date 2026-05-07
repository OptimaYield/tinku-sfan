const clock =
document.getElementById("clock");

function updateClock(){

const now = new Date();

let hour = now.getHours();

if(hour === 0){
hour = 12;
}

if(hour > 12){
hour = hour - 12;
}

clock.innerHTML =
`Current Moon Time: ${hour}:00 🌙`;

}

setInterval(updateClock,1000);

updateClock();

const loginForm =
document.getElementById("loginForm");

let generatedCode = "";

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const password =
document.getElementById("password")
.value
.trim();

const now = new Date();

let hour = now.getHours();

if(hour === 0){
hour = 12;
}

if(hour > 12){
hour = hour - 12;
}

let validPassword;

if(hour === 1){
validPassword = "1000";
}
else if(hour === 2){
validPassword = "2000";
}
else if(hour === 3){
validPassword = "3000";
}
else if(hour === 4){
validPassword = "4000";
}
else if(hour === 5){
validPassword = "5000";
}
else if(hour === 6){
validPassword = "6000";
}
else if(hour === 7){
validPassword = "7000";
}
else if(hour === 8){
validPassword = "8000";
}
else if(hour === 9){
validPassword = "9000";
}
else if(hour === 10){
validPassword = "1000";
}
else if(hour === 11){
validPassword = "1100";
}
else{
validPassword = "1200";
}

if(password === validPassword){

showVerification();

}else{

alert(
"Wrong Moon Password 🌙"
);

}

});

}

function showVerification(){

generatedCode =
Math.floor(
1000 + Math.random()*9000
).toString();

document.body.innerHTML = `

<div class="verify-screen">

<div class="verify-box">

<h1>
Verifying Identity 🌙
</h1>

<p>
Encrypted moonlight security checking...
</p>

<div class="loader"></div>

<div class="code-display">

${generatedCode}

</div>

<input
type="text"
id="verifyInput"
maxlength="4"
placeholder="Enter Code">

<button onclick="verifyCode()">

Verify Access ✨

</button>

</div>

</div>

`;

}

function verifyCode(){

const userCode =
document.getElementById(
"verifyInput"
).value;

if(userCode === generatedCode){

window.location.href =
"welcome.html";

}else{

alert(
"Verification Failed ✨"
);

}

}
