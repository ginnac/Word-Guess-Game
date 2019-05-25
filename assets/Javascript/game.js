

//-Array of name of song??
    var songs = ["despacito", "firework", "feels"];
    var guesssesremaining = 10;
    var correctGuesses =[]
    var incorrectGuesses = []
    var div =""
    var allGuesses =[]

    

//Function to randomly choose an index from my array

 var randomSong= songs[Math.floor(Math.random()*songs.length)];

        //printing to the console (testing)

        console.log(randomSong);


//Loop to create underscores instead of letters, and be pushed to createUnderscore array so we can display the array.

// function createUnderscores(){
    for (var i=0;i<randomSong.length;i++) {
             // lines.push(" _ ");
           //div += lines[i];
    div += "<span data-name =" +  randomSong.charAt(i) + ">" + " _ " +"</span>"; }

//printing the _ in the DOM
//document.getElementById("word").innerHTML = div;
document.getElementById("word").innerHTML = div;
    //underscores = "<div" +  randomSong.charAt(i) + ">" + " _ " +"</div>";

    //console.log(lines);

// taking guesses from user and accepting true values 

document.addEventListener("keypress", function(event){
    var code = event.keyCode 
    var letter = String.fromCharCode(code);
    var receivedGuess =letter.toLowerCase();

    //printing to the console (testing we are receiving user input (keys))   
    console.log(receivedGuess);

   

// comparing input with randomSong.charAt(i)... 

    for(var i=0; i< randomSong.length; i++){
    
        if(receivedGuess === randomSong.charAt(i) && !allGuesses.includes(receivedGuess)) {
           
           // correctGuesses.push("");
            console.log(randomSong[i]);

            // printing each randomSong. chartAt(i) it in the Dom..

            var list = document.getElementById("word");
            console.log(list);
           list.getElementsByTagName("span")[i].innerHTML = randomSong.charAt(i); 

 // creating an array with correct guesses          
        // if(!correctGuesses.includes(receivedGuess)){
            //if(correctGuesses.includes(randomSong.charAt(i)))
             correctGuesses.push(randomSong.charAt(i));
          // }

console.log(correctGuesses);


var guessL = correctGuesses.join("");

console.log(guessL);

//confirm the user guessed all letters - 
if(randomSong === guessL){
    alert("winner")}

}



else { incorrectGuesses.push(receivedGuess);
//console.log(incorrectGuesses);
document.getElementById("wronglettersguessed").innerHTML =  incorrectGuesses
}


   

    



            



    }

    allGuesses.push(receivedGuess);
}
);






     




