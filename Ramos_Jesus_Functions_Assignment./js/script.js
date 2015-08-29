// Jesus Ramos Acevedo // Scalable Data Infrastructure // Term 02// Functions Assignment


loop:            //label statement used with break/continue
    while(true){
        var game = prompt("Which Lottery game do you want to play?\n(FL/PowerBall ) it is case sensitive"); //prompt user to enter either FL/Powerball
        if(game !==null)               //check to see the game is null or not i.e user clicks cancel button.
        {
            game.toLowerCase();        //toLowerCase method for case insensitive code
        }
        switch (game) {             //switch stmt for checking whether FL/Powerball
            case "FL":
                field = "Florida_lottery"; //main/global variable for FL
                n=53;                      //main/global variable for FL
                break loop;
            case "PowerBall":
                field = "Powerball_lottery";   // main/global variable for powerball
                n=59;                          // main/global variable for powerball
                break loop;

            default: alert("Please enter either lottery type/Spell Check");  //default message if user click incorrect lottery name/clicks cancel
        }
    }



// Code for lottery Generator FL/Powerball
function lotterycodeGenerator(n,lotterytype) {
    //local variable
    var lotteryType = lotterytype;
    var picks = [];                //local array variable use to store the random number generated

    // Store possibilities in the numbersArr array
    var numbersArr = [];

    // n is the max number you can choose to appear on a ball
    for ( var i = 0; i < n; i++ ) {
        numbersArr.push(i);   //pushing everything into array numberArr first
    }
    switch (lotteryType) {  // checking type of lottery
        case "Florida_lottery":  //for FL
            while (picks.length < 6){ //length for FL
                var randomIndex = Math.floor(Math.random() * numbersArr.length); //Random no using Math random() and floor fn
                picks.push(numbersArr[randomIndex]);//push it to the numbers picks array
                numbersArr.splice(randomIndex, 1);// now remove already  that number already occured using splice() fn
            }
            break;
        case "Powerball_lottery":
            while (picks.length < 5){ // length of Powerball is 5
                var randomIndex = Math.floor(Math.random() * numbersArr.length);
                picks.push(numbersArr[randomIndex]);
                numbersArr.splice(randomIndex, 1);
            }
            break;

    }


    return picks;
}

//Function for final powerball number
function powerballGenerator(n)
{
    var picks = [];
    // Store possibilities in the numbersArr array
    var numbersArr = [];
    for ( var i = 0; i < n; i++ ) {
        numbersArr.push(i);
    }
    while (picks.length < 1){
        var randomIndex = Math.floor(Math.random() * numbersArr.length);
        picks.push(numbersArr[randomIndex]);
        numbersArr.splice(randomIndex, 1);
    }
    return picks;
}
var p =35;//for final powerball no
var lotteryresult = lotterycodeGenerator(n,field); //calling lotterycodeGenerator fn with n and field value entered by user

if(game.toUpperCase() === "FL") // if lottery type is FL then final power no is not included.
{
    console.log(" Here are you Fl Lottery numbers:"+ lotteryresult.toString() +  " " + "\nGood Luck");
}
else {
    console.log( " Here are your numbers:" + lotteryresult.toString() + " Your PowerBall is: " + powerballGenerator(p) + "\n Good Luck");

}