// // Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Conditionals Assignment

//Variables
var myName;//Age of the person wanting to go to the movies
var currentYear = 2015;//current year used to make age calculation
var rMovieAge = 18;//Age to watch a Movie rated R
var gMovieAge = 12;// Age to watch a Movie rated G
var pg13MovieAge = 13;//Age to watch a movie rated PG13
var userAge; // Age of user calculated using myAge variable
var peopleInParty;// Age to watch a movie with parents
var rMovies = 4
var gMovies = 5
var pG13Movies = 10


// prompts
myName = prompt("Welcome to Full sail Movies, please enter you name");
userAge = prompt("In order to watch a movie enter the year you were born ");
peopleInParty = prompt("How many people in party?");

//Casts
peopleInParty = Number(peopleInParty);// casts the input as number
userAge = Number(userAge);


//outputs
console.log("thank you"+" " + myName + " " + "for choosing Full sail Cinema");
console.log("your are" + (2015 - userAge) + "years old");
console.log("You have" + " " + (peopleInParty -1) + "in your party");
