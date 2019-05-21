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
        //maybe Array for letters of each song name??
        // var despacito = ["D","e","s","p","a","c","i","t","o"];
        // var firework = ["F","i","r","e","w","o","r","k"];
        // var feels = ["F","e","e","l","s"];
        // var line = ["_"]

//-need it to go 
        
 var randomSong= songs[Math.floor(Math.random()*songs.length)];
 var lines = randomSong.replace(/[a-z]/g, ' _ ')
 document.getElementById("word").innerHTML = lines;



          
    
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




 