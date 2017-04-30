		
var words = ["sake", "maguro", "tobiko", "ebi", "tako", "iwashi", "hokkigai", "tai", "saba", "tamago", "inari", "hotate", "uni", "ikura", "hamachi", "hirame", "unagi", "anago", "masago", "suzuki", "katsuo", "awabi", "torigai", "kohada", "kurage", "aji"];

var guessCount = 8;
var randomIndex = Math.floor(Math.random() * words.length); 
var randomWord = words[randomIndex];
var sushiWord = document.getElementById("sushiWord");
var wrongLetters = [];
var graveYard = document.getElementById("graveYard");
var guessesLeft = document.getElementById("guessesLeft");
console.log(randomWord);
var rightPos = [];

document.getElementById("guessesLeft").innerHTML = guessCount;

for(var i=0; i < randomWord.length; i++){
	sushiWord.innerHTML = "_" + sushiWord.innerHTML;

}
	


document.onkeyup = function(event){
	var key = event.key.toLowerCase();
	
	event.preventDefault();
	
	console.log(key);
	
	randomWord.indexOf(key);


	if(randomWord.indexOf(key) === -1 && wrongLetters.indexOf(key) === -1){
		wrongLetters.push(key);
		graveYard.innerHTML = wrongLetters;
		
	}

	if(randomWord.indexOf(key) === -1){
		guessCount--;
		document.getElementById("guessesLeft").innerHTML = guessCount;
	}

	//if the key pressed has an index of greater than 1, that letter will appear in the word.
	if (randomWord.indexOf(key) > -1) {

	//creating a new variable that is equal to the current id "sushiWord"
		var newUnderScore = sushiWord.innerHTML;
	
	//iterating through the lenght of random word, looking for the location of the key 
		for(var i = 0; i < randomWord.length; i++){
	
	//when the finds it's index value, the key value is pushed into the correct position in the word and the the index value in relation to the randomWord is pushed into the array rightPos
			if(key === randomWord[i]){
				rightPos.push(i); 

			}
		}

		// 
		for(var i = 0; i < rightPos.length; i++){
			var targetPos = rightPos[i];
			newUnderScore = newUnderScore.substr(0, targetPos) + randomWord[targetPos] + newUnderScore.substr(targetPos + 1)
		}
		rightPos = [];
		sushiWord.innerHTML = newUnderScore;
		
	}	
	if(guessCount === -1){
		window.location.reload();
	}
	
}


	