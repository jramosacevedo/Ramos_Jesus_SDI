// Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Functions Assignment


loop:            //label statement used with break/continue
    while(true){
        var game = prompt("What lottery do you play? (FL/PowerBall )"); //prompt user to enter either FL/Powerball
        if(game !==null)               //check to see the game is null or not i.e user clicks cancel button.
        {
            game.toLowerCase();        //toLowerCase method for case insensitive code
        }
        switch (game) {             //switch stmt for checking whether FL/Powerball
            case "fl":
                field = "Florida_lottery"; //main/global variable for FL
                n=53;                      //main/global variable for FL
                break loop;
            case "powerball":
                field = "Powerball_lottery";   // main/global variable for powerball
                n=59;                          // main/global variable for powerball
                break loop;

            default: alert("Please enter either lottery type/Spell Check");  //default message if user click incorrect lottery name/clicks cancel
        }
    }



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

    for (var i = 0; i < 6; i++) {
        randomNum[i] = Math.random() * (max - min) + min; // subtracts the max number from minimum number and adds the minumum
        randomNum[i] = Math.round(randomNum[i]);// rounds the number to the next integer.

    }
    return randomNum;

}

powerBallNumber = powerBall (1, 52);
lottoNumbers = randomNumGen(1, 52);
console.log(" " +lottoNumbers + " ");
console.log("Here is your Powerball" + powerBallNumber);