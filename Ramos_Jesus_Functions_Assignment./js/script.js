// // Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Functions Assignment
//Variables
var myRandom


function randomNumGen() {

    var randomNum = [];

    for (var i = 0; i < 6; i++) {
        randomNum[i] = Math.random() * (53 - 1);
        randomNum[i] = Math.round(randomNum[i]);

    }
    return randomNum;

}

myRandom = randomNumGen();
console.log(" Here are your numbers." + myRandom);