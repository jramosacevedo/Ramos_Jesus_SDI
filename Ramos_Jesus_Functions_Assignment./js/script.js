// Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Functions Assignment

var lottoNumbers
var powerBallNumber

//Lotto Generator
function randomNumGen(max, min) {

    var randomNum = [];//creates an array with random numbers

    for (var i = 0; i < 6; i++) {
        randomNum[i] = Math.random() * (max - min) + min; // subtracts the max number from minimum number and adds the minumum
        randomNum[i] = Math.round(randomNum[i]);// rounds the number to the next integer.

    }
    return randomNum;

}
//PowerBall Generator
function powerBall(max, min) {

    var randomNum = [];//creates an array with random numbers

    for (var i = 0; i < 1; i++) {
        randomNum[i] = Math.random() * (max - min) + min; // subtracts the max number from minimum number and adds the minumum
        randomNum[i] = Math.round(randomNum[i]);// rounds the number to the next integer.

    }
    return randomNum;

}

powerBallNumber = powerBall (1, 52);
lottoNumbers = randomNumGen(1, 52);
console.log(" Here are your numbers." + lottoNumbers);
console.log("Here is your Powerball" + powerBallNumber);