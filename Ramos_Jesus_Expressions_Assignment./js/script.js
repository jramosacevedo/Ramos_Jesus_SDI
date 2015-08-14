

//Variables
var myResidenceCity;
var MyResidenceState;
var yearsLivingInState;
var usCitizen = true;

// prompts

myResidenceCity = prompt("Enter your City");
myResidenceState = prompt("Enter your State");
yearsLivingInstate = prompt("Years living there");
//usCitizen = prompt("How many years have you been a US Citizen?");
yearsLivingInState = Number(yearsLivingInState);
//outputs
console.log("You live in " + myResidenceCity + " " + myResidenceState);
console.log("it is" + " " + usCitizen +" " + "that you are a US Citizen");
//console.log("You have been living in Puerto Rico for" + yearsLivingInState + "years more than me");
console.log("You have been living there for " + yearsLivingInState + " years more than me");
