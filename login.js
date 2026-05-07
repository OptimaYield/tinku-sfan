const correctPassword = "Tinkubs1135";

let generatedOTP = "";

function verifyPassword(){

const password =
document.getElementById("password").value;

if(password === correctPassword){

document.getElementById("otpSection")
.classList.remove("hidden");

generatedOTP =
Math.floor(1000 + Math.random()*9000);

document.getElementById("generatedOtp")
.innerText = generatedOTP;

}else{
alert("Wrong Password");
}
}

function verifyOTP(){

const otpInput =
document.getElementById("otpInput").value;

if(otpInput == generatedOTP){

window.location.href = "about.html";

}else{
alert("Invalid OTP");
}
}
