// // Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Functions Assignment
//Variables
var lottoNumbers


function randomNumGen(max, min) {

    var randomNum = [];

    for (var i = 0; i < 6; i++) {
        randomNum[i] = Math.random() * (max - min +1) + min ;
        randomNum[i] = Math.round(randomNum[i]);

    }
    return randomNum;

}

lottoNumbers = randomNumGen(1, 53);
console.log(" Here are your numbers." + lottoNumbers);