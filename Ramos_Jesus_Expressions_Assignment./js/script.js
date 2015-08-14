// // Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Expressions Assignment

//Variables
var myResidenceCity;
var MyResidenceState;
var yearsLivingInState;
var usCitizen = true;

// prompts

myResidenceCity = prompt("Enter your City");
myResidenceState = prompt("Enter your State");
yearsLivingInstate = prompt("Years living there");

yearsLivingInState = Number(yearsLivingInstate);// casts the input as number

//outputs
console.log("You live in " + myResidenceCity + " " + myResidenceState);
console.log("it is" + " " + usCitizen +" " + "that you are a US Citizen");
console.log("You have been living there for " + (yearsLivingInState - 1) + " years more than me");
