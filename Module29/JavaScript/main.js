var friends = ["Fron","Ledi","Orges","Amer","Ajan","Ard","Ajla"]

console.log(friends);
console.log(friends[3]);

// Array Fynctions//

friends.push("Faik")

console.log(friends);

friends.pop()

console.log(friends);

friends.unshift("Eris")

console.log(friends);

friends.shift()

console.log(friends);

friends.splice(0,2,"White Monster")

console.log(friends);


console.log(Math.random());

console.log(Math.floor(Math.random()*10));

var fav_drinks = ["White Monster",'Pineapple',"Cola 0",'Sprite',"Fanta"]
 var[i1,i2,i3] = fav_drinks

 

 console.log(i1)

 var[first,second,...others] = fav_drinks

 console.log(first)

 console.log(others)


 var avr_age =[10,23,44,45,55]
 var[nr1,nr2,nr3,nr4,nr5] = avr_age

 console.log((nr1+nr2+nr3+nr4+nr5)/5)