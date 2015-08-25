// // Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Functions Assignment
//Variables
var myRandom


function randomNumGen(max, min) {

    var randomNum = [];

    for (var i = 0; i < 6; i++) {
        randomNum[i] = Math.random() * (max - min);
        randomNum[i] = Math.round(randomNum[i]);

    }
    return randomNum;

}

myRandom = randomNumGen(53, 1);
console.log(" Here are your numbers." + myRandom);