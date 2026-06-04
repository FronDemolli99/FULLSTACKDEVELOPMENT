var payment_amount = 33

if (payment_amount >= 50){
   console.log("Produkti u Shit!") 
}
else{
    console.log("Shuma e pa Mjaftueshme") 
}


var input=document.getElementById('input_id')
var text=document.getElementById('text')
var button=document.getElementById('button')

button.onclick=function () {
    text.innerHTML = input.value;
}


var mosha=document.getElementById('mosha')
var text_m=document.getElementById('age_text')
var button_m=document.getElementById('age_button')


button_m.onclick=function () {
    if (mosha >18) {
        age_text.innerHTML="You Can Vote"
    }
    else if (mosha == 18) {
        age_text.innerHTML="You Can Vote, Congrats on your First Time Voating"
    }
    else{
        age_text.innerHTML ="You Cannot Vote"
    }
}



var nr1=document.getElementById('nr1')
var nr2=document.getElementById('nr2')
var add=document.getElementById('add')
var subctract=document.getElementById('subctract')
var divide=document.getElementById('divide')
var multiply=document.getElementById('multiply')
var resault=document.getElementById('resault')


add.onclick = function () {
    resault.innerHTML= parseInt(nr1.value) + parseInt(nr2.value)
}

subctract.onclick = function () {
    resault.innerHTML= parseInt(nr1.value) - parseInt(nr2.value)
}

divide.onclick = function () {
    resault.innerHTML= parseInt(nr1.value) / parseInt(nr2.value)
}

multiply.onclick = function () {
    resault.innerHTML= parseInt(nr1.value) * parseInt(nr2.value)
}