// // Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Conditionals Assignment

//Variables
var myResidenceCity;//City of residence
var MyResidenceState;//State of residence
var yearsLivingInState;//Years in state
var usCitizen = true;

// prompts

myResidenceCity = prompt("Enter your City");
myResidenceState = prompt("Enter your State");
yearsLivingInstate = prompt("Years living there");

yearsLivingInState = Number(yearsLivingInstate);// casts the input as number

//outputs
console.log("You live in " + myResidenceCity + " " + myResidenceState);// State and city of residence output
console.log("it is" + " " + usCitizen +" " + "that you are a US Citizen");
console.log("You have been living there for " + yearsLivingInState - 5 + " years more than me");//time that you lived there
