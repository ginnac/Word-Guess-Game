

//Arrays: 

var songs = ["despacito", "firework", "feels"];
var guessesremaining = 7;
var correctGuesses =[]
var incorrectGuesses = []
var div =""
var allGuesses =[]
var points= 0;
let uniqueArray = []



//Math.random applied to randomly choose an index from my array
var randomSong= songs[Math.floor(Math.random()*songs.length)];

//Loop to create underscores instead of letters, 
for (var i=0;i<randomSong.length;i++) {
    div += "<span data-name =" +  randomSong.charAt(i) + ">" + "   _   " +"</span>"; }

//printing the Underscores in the DOM
document.getElementById("word").innerHTML = div;



// taking key guesses from user 

document.addEventListener("keypress", function key(event){
var code = event.keyCode 
var letter = String.fromCharCode(code);
var receivedGuess =letter.toLowerCase();



                            //printing to the console (testing we are receiving user input (keys))   
                                        console.log(receivedGuess);

// comparing input keys with letters from randomSong (using charAt(i) to do so...) 
// loop to work with every letter from randomSong -
for(var i=0; i< randomSong.length; i++){
    // conditional used to compare just matching letters and include them once - 
    if(receivedGuess === randomSong.charAt(i) && !allGuesses.includes(receivedGuess)) {
       
                             // testing randomSong[i]   
                                    console.log(randomSong[i]);

// printing it in the Dom each randomSong letter that matches with the user key input  ..

        var list = document.getElementById("word");
       list.getElementsByTagName("span")[i].innerHTML = randomSong.charAt(i); 

// creating an array with correct guesses letters       
         correctGuesses.push(randomSong.charAt(i));
                                
                                //testing - looking inside the correctGuesses array - 
                                    console.log(correctGuesses);
///..........

}

}

allGuesses.push(receivedGuess);

console.log(allGuesses)

//Getting just incorrect letters...

if(!correctGuesses.includes(receivedGuess)&& !incorrectGuesses.includes(receivedGuess)){
incorrectGuesses.push(receivedGuess);

//testing that just incorrect letters are being pushed....
console.log(incorrectGuesses);

// getting remaining guesses updated..
guessesremaining = guessesremaining - 1;

//testing remaining guesses counts down...
console.log(guessesremaining);

if(guessesremaining <= 0){
alert("Game Over");
if(guessesremaining <= 0){
    //testing it works
    alert("Game Over");
  //emptying arrays to start guesses again..
    correctGuesses =[]
    incorrectGuesses = []
    div =""
    allGuesses =[]
    // clearing randomSong
    div.replace(randomSong,"")
    // choosing a diferent randonSong
    randomSong = songs[Math.floor(Math.random()*songs.length)];
    // console.log(yey);
    
    // console.log(emptyingRandomSong);
    // console.log(div+= "");
    
    //looping to go get each letter from the word..
    
    for (var i=0;i<randomSong.length;i++) {
        
        // printing it in the DOM
        div+= "<span data-name =" +  randomSong.charAt(i) + ">" + " _ " +"</span>"; }
    
    
    //shorting down getElementById("word")....
    document.getElementById("word").innerHTML= div ;


}

}

}

// Getting points counter up to work...

if(randomSong.length === correctGuesses.length){
points = points + 1;
alert("You Won!");
//window.location.reload();

correctGuesses =[]
incorrectGuesses = []
div =""
allGuesses =[]
// clearing randomSong
div.replace(randomSong,"")
// choosing a diferent randonSong
randomSong = songs[Math.floor(Math.random()*songs.length)];
// console.log(yey);

// console.log(emptyingRandomSong);
// console.log(div+= "");

//looping to go get each letter from the word..

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













