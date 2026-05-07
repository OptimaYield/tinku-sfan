const clock = document.getElementById("clock");

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

if(loginForm){

loginForm.addEventListener("submit",
function(e){

e.preventDefault();

const name =
document.getElementById("name")
.value
.trim();

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

const validPassword =
hour + "000";

if(
name.toLowerCase() ===
"tinku purkait"
&&
password === validPassword
){

window.location.href =
"welcome.html";

}else{

alert(
"Wrong universe key ✨"
);

}

});

}
