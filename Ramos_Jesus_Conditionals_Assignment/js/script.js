// // Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Conditionals Assignment

//Variables
var myName;//Age of the person wanting to go to the movies
var currentYear = 2015;//current year used to make age calculation
var rMovieAge = 18;//Age to watch a Movie rated R
var gMovieAge = 12;// Age to watch a Movie rated G
var pg13MovieAge = 13;//Age to watch a movie rated PG13
var userAge; // Age of user calculated using myAge variable
var peopleInParty;// Age to watch a movie with parents


// prompts
myName = prompt("Welcome to Full sail Movies, please enter you name");
userAge = prompt("In order to watch a movie enter your year of birth ");
//peopleInParty = prompt("How many people in party?");


userAge = Number(userAge);// casts the input as number

//outputs
console.log("thank you"+" " + myName + " " + "for choosing Full sail Cinema, your are" + userAge - currentYear + "years old");
//console.log();
//console.log();
