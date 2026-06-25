function validateform() {
    


var name = document.getElementById("Name").value
var age = document.getElementById("Age").value
var email = document.getElementById("Email").value
var message = document.getElementById("message")
var password = document.getElementById("Password").value

var nameRegex = /^[a-zA-Z]+$/;
var ageRegex = /^[1-9][0-9]?$/;
var emailRegex = /^\w+@\w+\.\w+$/;
var passwordRegex= /^.{6}$/

if(!nameRegex.test(name)) {
    message.textContent = "Please Enter A Valide Name(Letters Only)"
}
else if(!ageRegex.test(age)) {
    message.textContent = "Please Enter A Valide Age(Numbers Only)"

}

else if(!emailRegex.test(email)) {
    message.textContent = "Please Enter A Valide Email Adress"
   
}

else if(!passwordRegex.test(email)) {
    message.textContent = "Please Enter A Valide Password (6 Caracters Minimum)"
   
}

else{
    message.textContent = "Submited Sucsesfuly!"
}

message.setAttribute("class","error")

if(message.textContent === "Submited Sucsesfuly!"){
    message.setAttribute("class","success")
}




}