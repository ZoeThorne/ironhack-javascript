// Not working yet

function Character(name, occupation, weapon) {
	this.name = name;
	this.occupation = occupation;
	this.weapon = weapon;
}

Character.prototype = {

	makeAjax:function(){
	$.ajax({
		type: "GET", // API's HTTP verb (defaults to GET)
		url: "https://ironhack-characters.herokuapp.com/characters", //API's URL
		success: handleResponse, // Two separate callbacks for success and error
		error: handleError	// Use named functions to reduce code clutter
		})
	},

	handleResponse:function(response) {
	console.log(response);
	var charactersArray = response; // Store objects it got from the URL
		$.each(charactersArray,function (index, character) { //Display all of the characters
			//Use back ticks to make an HTML template (much nicer than concatenation!)
			var html = ` 
				<li>
					<h2>${character.name}</h2>
					<p><strong>Weapon: </strong>${character.weapon}</p>
					<p><strong>Occupation: </strong>${character.occupation}</p>

				</li><br>
				`;
			$('.js-character-list').append(html); //Then you only have to append the variable
		})
	},

	handleError:function(error){
	console.log("Error");
	console.log(error.responseText); //Show the error
	},

	submitForm:function() {
		$('form').submit(function(event){
			event.preventDefault(); //Blocks submit ie refreshing the page
			var newCharacter = new Character ({ // Stores values from the id of the form
				name: $('#name').val(),
				occupation: $('#occupation').val(),
				weapon: $('#weapon').val() 
			})
			makePost(newCharacter) // Call the function
			});
	},

	makePost:function(newCharacter){
	$.ajax({
		type: "POST",  
		url: "https://ironhack-characters.herokuapp.com/characters", 
		data: newCharacter, // Get values from form
		success: handleUpdate,
		error: handleError
		});
	},

	handleUpdate:function(response){
	console.log(response);
}

}

