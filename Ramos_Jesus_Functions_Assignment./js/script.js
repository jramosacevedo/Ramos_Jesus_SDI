// // Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Functions Assignment

function randomNumGen(){

    var randomNum = [];

    for (var i = 0; i < 4; i++) {
        randomNum[i] = Math.random() * (20 - 10) + 10;
        randomNum[i] = Math.round(randomNum[i]);

    }
    return randomNum;

}

myRandom = randomNumgen();
console.log(" Here are your numbers." + myrandom);