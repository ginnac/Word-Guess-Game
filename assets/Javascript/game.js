

//Arrays - list of songs, and empty arrays where to push values...
var songs = ["despacito", "firework", "feels"];
var guessesremaining = 7;
var correctGuesses =[]
var incorrectGuesses = []
var div =""
var allGuesses =[]
var points= 0;
let uniqueArray = []

//Math.random applied to randomly choose an index from my songs array
var randomSong= songs[Math.floor(Math.random()*songs.length)];

//Loop to create underscores instead of letters, and printing it to the Dom
for (var i=0;i<randomSong.length;i++) {
    div += "<span data-name =" +  randomSong.charAt(i) + ">" + "   _   " +"</span>"; }

//shorting the getElementById function...
document.getElementById("word").innerHTML = div;


// function to take key guesses from user 
document.addEventListener("keypress", function key(event){
var code = event.keyCode 
var letter = String.fromCharCode(code);
var receivedGuess =letter.toLowerCase();
                                        
                                            //printing to the console (testing we are receiving user input (keys))   
                                                        console.log(receivedGuess);

    // loop to work with every letter from randomSong, did it inside the function so happens when the event happens (key)...
    for(var i=0; i< randomSong.length; i++){
        // conditional used to compare just matching letters, and include them once - 
        if(receivedGuess === randomSong.charAt(i) && !allGuesses.includes(receivedGuess)) {
       
                                                                // testing randomSong[i]   
                                                                        console.log(randomSong[i]);

            // printing it in the Dom each randomSong letter that matches with the user key input  ..
            var list = document.getElementById("word");
            list.getElementsByTagName("span")[i].innerHTML = randomSong.charAt(i); 

            // creating an array with correct guesses letters to be used to later to score points...       
            correctGuesses.push(randomSong.charAt(i));
                                
                                                                //testing - looking inside the correctGuesses array - 
                                                                        console.log(correctGuesses);


        }

    }

    //push every user key input, needed becuase allGuesses array is compared with correctGuesses array and incorrectGuesses array
    allGuesses.push(receivedGuess);
                                                                    //testing to see see inside allGuesses
                                                                            console.log(allGuesses)

    //Getting just incorrect letters array to display in the Dom, updating guesses remaining, and geting new randomSong when user lost
    if(!correctGuesses.includes(receivedGuess)&& !incorrectGuesses.includes(receivedGuess)){
        //pushing wrong guesses to incorrectGuesses array to later display them in the Dom
        incorrectGuesses.push(receivedGuess);
                                                            //testing that just incorrect letters are being pushed....
                                                                            console.log(incorrectGuesses);

        // getting remaining guesses updated..
        guessesremaining = guessesremaining - 1;
                                                            
                                                            //testing remaining guesses counts down...
                                                                            console.log(guessesremaining);
        // scoringdown every wrong key is pressed...
        if(guessesremaining <= 0){

            //emptying arrays to start receiving new guesses for a new randomSong..
            correctGuesses =[]
            incorrectGuesses = []
            div =""
            allGuesses =[]
            guessesremaining = 7;

            // clearing randomSong
            div.replace(randomSong,"")
            // choosing a diferent randonSong
            randomSong = songs[Math.floor(Math.random()*songs.length)];

    
            //looping to go get each letter from the word..
            for (var i=0;i<randomSong.length;i++) {
        
                // printing it in the DOM
                div+= "<span data-name =" +  randomSong.charAt(i) + ">" + " _ " +"</span>"; }
    
    
            //shorting down getElementById("word")....
            document.getElementById("word").innerHTML= div ;


        }

    }

    // when user wins...
    //comparing randomSong letters with correct guesses, compare their length to achieve this....
    if(randomSong.length === correctGuesses.length){
        
        //update scoring points 
        points = points + 1;
    
        //emptying arrays to start receiving new guesses for a new randomSong..

        correctGuesses =[]
        incorrectGuesses = []
        div =""
        allGuesses =[]
        guessesremaining = 7;
        
        // clearing randomSong
        div.replace(randomSong,"")
        
        // choosing a diferent randonSong
        randomSong = songs[Math.floor(Math.random()*songs.length)];

        //looping to go get each letter from the new randomSong..
        for (var i=0;i<randomSong.length;i++) {
    
             // printing it in the DOM
            div+= "<span data-name =" +  randomSong.charAt(i) + ">" + " _ " +"</span>"; }
            
            //shorting down getElementById("word")....
            document.getElementById("word").innerHTML= div ;
    
    }

    //printing incorrect letters..

    document.getElementById("incorrectLettersGroup").innerHTML = incorrectGuesses;

    //printing guessesremaing(and updates)

    document.getElementById("guessesRemaining").innerHTML = guessesremaining;

    //printing points (and updates)

    document.getElementById("pointsCounter").innerHTML = points;

}

);













