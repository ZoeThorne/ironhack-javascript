document.querySelector(".js-fetch-characters").onclick = fetchCharacters;

function fetchCharacters(){
	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = handleResponse; //Callback for the request when the state changes
	httpRequest.open("GET", "https://ironhack-characters.herokuapp.com/characters");
	httpRequest.send();
}

function handleResponse (event) { //State change callback
	var httpRequest = event.currentTarget;

	if (httpRequest.readyState === 4) { // Check that it's done
		if (httpRequest.status === 200) { //Check that it's OK
			var dataString = httpRequest.responseText; //Data from the server as a string
			var charactersArray = JSON.parse(dataString);//Interpret the data from the string
			showCharacters(charactersArray);//Call a function with the server data
		}
		else {
			alert("There was an error");
		}
	}
}

function showCharacters (charactersArray) {
	charactersArray.forEach(function (theCharacter) {
		console.log(theCharacter.name);
	});
}