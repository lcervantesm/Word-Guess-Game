//Define an array with the words
var acceptedChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
var array = ['cheetara', 'pantro', 'liono', 'snarf', 'pumara', 'tigro', 'felina'];
//Define counters (wins, tries remaining)
var tremaining = 15;
//add a listener to determine the start of the game


document.onkeyup = function(event) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var word = array[Math.floor(Math.random() * array.length)];
    console.log(Array.from(word));
    //Define an empty array to push the spaces
    var correctGuesses = [];
    for(i=0; i<word.length; i++){
        correctGuesses.push('_');
        document.getElementById('word').innerHTML = correctGuesses.join(" ");
    }
    //var ap = event.key;
    document.getElementById('append').innerHTML += event.key;
    //Print the lives remaining
    document.getElementById('nguesses').innerHTML = tremaining;

    document.onkeyup = function(evt){
    //Determines which key was pressed.
    var key = evt.key;
    //for(var j=0; j<array.length; j++){
        if(Array.from(word).includes(key) && acceptedChar.includes(key)){
            console.log(key);
        }
    //}
    }
}

//choose a random word from the array and show it to the user
//add a listener to determine which key was pressed
//save it in a variable
//if the key has already been pressed, ignore it
//verify that the character pressed by the user exists in the word of the array
//append the incorrect letters pressed in the HTML
//if the character exist reveal it to the user (change innerHTML)
//when all the spaces have been revealed show a winning message
//show the next word
//if there are no more tries remaining show losing message
