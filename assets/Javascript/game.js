// add any key to get started//
// document.getElementById("start game").onkeyup= function(){getStarted()};

// function getStarted(){
// document.getElementById("start").innerHTML = "Game has started!";
// }
// Var X = getStarted...

    //Variables?? Array??//

        //loop
    //conditional
    //call function

//player wins when//

//-Array of name of song??
    var songs = ["despacito", "firework", "feels"];
    var lines = []
    var correctGuesses =[]
    var incorrectGuesses = []
       

//-Function to randomly choose an index from my array

 var randomSong= songs[Math.floor(Math.random()*songs.length)];

 //printing to the console (testing)

 console.log(randomSong);


// - Function to create an Array for random song letters, they were pushed as _
 //...var lines = randomSong.replace(/[a-z]/g, ' _ ') .....could be used????
function createUnderscores(){
    for (var i=0;i<randomSong.length;i++){
        lines.push("_");}

        return lines;
}

//printing to the console (testing)

console.log(createUnderscores());

console.log(lines);

// taking guesses from user and accepting true values 

document.addEventListener("keypress", function(event){
    var code = event.keyCode 
    var letter = String.fromCharCode(code);
    var receivedGuess =letter.toLowerCase();
    console.log(receivedGuess);

    if(randomSong.indexOf(receivedGuess) > -1){
       
//printing to the console (testing)
        console.log(true);

// storing right guesses and attempting to convert them to receivedGuess (user input)
    
        correctGuesses.push(receivedGuess);

        lines[randomSong.indexOf(receivedGuess)] = receivedGuess;
     
        if (lines.join("") === randomSong){

        //testing alert (testing)
        alert ("yey!");

    }

    }

    else {
//printing to console (testing)
        console.log(false);

// pushing them to incorrectGuesses array so they all can be displayed

        incorrectGuesses.push(receivedGuess);
        alert ("wrong guess!");


    }
});


     


   




 //console.log(lines)

//  document.getElementById("word").innerHTML = lines;


 //- Press a key letter and replace _ with correct letter 



          
    
    //loop for the song array???
        // document.onkeyup = function(event){
        // var letter =event.key.toLowerCase();
        // for (i = 0; i <songs.length; i++){
        //       if (letter ==="a"){
        // document.getElementById("word").innerHTML = despacito.length;}}}

        
    //   }
    //   document.getElementById("demo").innerHTML = text;

    // }

    //function to call (choose) a song 
//And look the array with letters of the song chosen
    //loop for the song letters array 
    //function to print correct letters in the right placement




 