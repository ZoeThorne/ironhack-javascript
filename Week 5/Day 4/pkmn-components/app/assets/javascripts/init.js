(function(){
	if (window.PokemonApp === undefined) {	// Create an empty object if it doesn't exist
		window.PokemonApp = {};
	}

	PokemonApp.init = function () {
		// Code to be executed on every page goes here
		console.log("Pokemon App ONLINE!");
	};

	$(document).on("ready", function () {	// Things like event listeners go in here
		PokemonApp.init();
	});
})();
// Function in parentheses declares and executes the function
// Encapsulation is more secure