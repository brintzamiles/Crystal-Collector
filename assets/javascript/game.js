var newGameFlag = true;
var gameTally = 0;
var upperBound;
var lowerBound;
var userTotal = 0;
var wins = 0;
var losses = 0;
var redNum = 0;
var yellowNum = 0;
var purpleNum = 0;
var blueNum = 0;
var targetNumber = 0;

function newGame() {

    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120

    if (newGameFlag) {

        var upperBoundTarget = 120;
        var lowerBoundTarget = 19;
        targetNumber = Math.floor(Math.random() * (upperBoundTarget - lowerBoundTarget) + lowerBoundTarget);
        console.log("targetNumber:  " + targetNumber);
        $('#target-Number').text(targetNumber);
        userTotal = 0;


        // Setting up random numbers for each jewel
        // Random number has to be between 1 - 12
        // 
        var upperBoundCrystal = 12
        var lowerBoundCrystal = 1

        redNum = Math.floor(Math.random() * (upperBoundCrystal - lowerBoundCrystal) + lowerBoundCrystal);
        console.log("Red " + redNum);

        blueNum = Math.floor(Math.random() * (upperBoundCrystal - lowerBoundCrystal) + lowerBoundCrystal);
        console.log("Blue " + blueNum);

        yellowNum = Math.floor(Math.random() * (upperBoundCrystal - lowerBoundCrystal) + lowerBoundCrystal);
        console.log("Yellow " + yellowNum);

        purpleNum = Math.floor(Math.random() * (upperBoundCrystal - lowerBoundCrystal) + lowerBoundCrystal);
        console.log("Purple " + purpleNum);



        //  Declaring variables for tallies
        $('#Wins').text(wins);
        $('#Losses').text(losses);
        // Selects a random number to be shown at the start of the game
        // Number should be should be between 1 - 10
        //
        newGameFlag = false;


    };
};


//Handle the crystal clicks
$('#red-Crystal').on('click', function () {
    newGame();

    userTotal = userTotal + redNum;
    console.log("New userTotal= " + userTotal);
    $('#user-Total').text(userTotal);
    //sets win/lose conditions
    if (userTotal == targetNumber) {

        youWin();
    } else if (userTotal > targetNumber) {
        $('#user-Total').text(userTotal);

        youLose();
    }
})
$('#blue-Crystal').on('click', function () {
    newGame();

    userTotal = userTotal + blueNum;
    console.log("New userTotal= " + userTotal);
    $('#user-Total').text(userTotal);
    //sets win/lose conditions

    if (userTotal == targetNumber) {
        youWin();
    } else if (userTotal > targetNumber) {
        youLose();
    }
})

$('#yellow-Crystal').on('click', function () {
    newGame();
    userTotal = userTotal + yellowNum;
    console.log("New userTotal= " + userTotal);
    $('#user-Total').text(userTotal);
    //sets win/lose conditions
    if (userTotal == targetNumber) {
        youWin();
    } else if (userTotal > targetNumber) {
        youLose();
    }
})

$('#purple-Crystal').on('click', function () {
    newGame();
    userTotal = userTotal + purpleNum;
    console.log("New userTotal= " + userTotal);
    $('#user-Total').text(userTotal);
    //sets win/lose conditions

    if (userTotal == targetNumber) {
        youWin();
    } else if (userTotal > targetNumber) {
        youLose();
    }
});

function youWin() {

    //alert("You win! Target:  " + targetNumber);
    wins++;
    $('#winLossMsg').text("You Win!");
    $('#Wins').text(wins);
    newGameFlag = true;
    $('#user-Total').text(userTotal);
    //$('#winLossMsg').text(" ");
}

function youLose() {

    //alert("You lose! Target:  " + targetNumber + ".  Your total is:  " + userTotal);
    losses++;
    $('#winLossMsg').text("You Lose!");
    $('#Losses').text(losses);
    newGameFlag = true;
    $('#user-Total').text(userTotal);
    //$('#winLossMsg').text(" ");
}