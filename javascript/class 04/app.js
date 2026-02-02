console.log("Javascript Connected!");

alert("Tayyabah Here!");

var age= +prompt("Type your age")
if(age>=18){
    console.log("Allowed to drive")
}else{
    console.log("Not Allowed to drive")
}


// Grading System:
var marks= +prompt("Type your marks")
if(marks>=80){
    console.log("Grade A")
}else if(marks>=60){
    console.log("Grade B")
}else if(marks>=50){
    console.log("Grade C")
}else{
    console.log("Failed")
}


// Calculator:
var num1= +prompt("Type number 1")
var oper= prompt("Type your operator (+ - * / )")
var num2= +prompt("Type number 2")

if (oper=== "+") {
    console.log(num1+num2);
}else if(oper=== "-") {
    console.log(num1-num2);
}else if (oper=== "*") {
    console.log(num1*num2);
}else if (oper=== "/") {
    console.log(num1/num2);
}else{
    console.log("Please type an invalid operator")
}


//  Testing Sets Of Conditions:
//      AND GATE (2 condition must be true)(&&)
//      OR GATE (1 condition must be true)( || )

var age=18;
var afraa=true;
if(age>17&&afraa){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}


var age=19;
var maida=false;
if(age>18||maida){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}