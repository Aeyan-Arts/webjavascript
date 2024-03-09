const firstName = "Ahmed";
const age = "16";
const dateOfBirth = "1999/5/6";
const sibling = 4;
const hobby = ["basketball","Tennis"];
hobby.push("Football","pingpong","swwming");
const hoppy=hobby.slice(2,4);
var inClub = true;
let favoritFood = ["Banana","Beef","CheeseCake"];
favoritFood.splice(1,1,"lemons");
let ageInt = parseInt(age);
console.log(`I'm ${firstName}, I'm ${ageInt} years old`);
console.log(`I love `+ favoritFood.toString());
console.log("I like to play"+hobby.toString());
console.log(hoppy);
string = sibling.toString();
console.log(`I have ${string} siblings`);
inClub?a="I'm in club":a="I'm not in a club";
console.log(a);
if (age >= 16 && inClub){
    x=1
    console.log("I'm happy")
}
else{
    x=0
    console.log("me sad :(")
}

//challenge2
let mohamed="friend"
if (x==1){
    var greetings="hallo";
    console.log(greetings +" "+ mohamed);
}
lastName = prompt("enter parent name: ")
console.log("my last name is "+lastName)

//challeng3

//is postive or negative or zero
num = prompt("enter number: ")
if (num==0){
    console.log("the number is Zero")
}
else if (num>0){
    console.log("the number is postive")
}
else{
    console.log("the number is negative")
}

//day of the week
console.log(`1.sunday
2.monday
3.tuesday
4.wednsday
5.thursday
6.friday
7.saturaday`)
let dayOfWeek = prompt("enter number of the day: ")
dayOfWeek = parseInt(dayOfWeek)
switch (dayOfWeek):
case 1:
    console.log("it's sunday")
    break
case 2:
    console.log("it's monday")
    break
case 3:
    console.log("it's tuesday")
    break
case 4:
    console.log("it's wednsday")
    break
case 5:
    console.log("it's thursday")
    break
case 6:
    console.log("it's friday")
    break
case 7:
    console.log("it's saturaday")
    break

//grade system

score=87
if (score>50){
    console.log("pass")
}
else{
    console.log("fail")
}

//even or odd
dcidNum = prompt("enter number: ")
if(dcidNum%2=0){
    console.log("number is even")
}
else{
    console.log("number is odd")  
}
