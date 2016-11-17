// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


PokemonApp.Pokemon = function (pokemonUri) {		// Constructor Pokemon inside PokemonApp (stored as a key)
	this.id = PokemonApp.idFromUri(pokemonUri);		// Its id is from the uri

};

PokemonApp.Pokemon.prototype.fetchInfo = function(){
	$.ajax({
		type: "GET",
		url: "/api/pokemon/" + this.id,				// Get url from the pokemon's id
		success: function(response){
			console.log(response)
			this.name = response.name;
			this.pkdx_id = response.pkdx_id;
			this.types = response.types;
			this.height = response.height;
			this.weight = response.weight;
			this.hp = response.hp;
			this.attack = response.attack;
			this.defense = response.defense;
			this.sp_atk = response.sp_atk;
			this.sp_def = response.sp_def;
			this.sprites = response.sprites;
			this.descriptions = response.descriptions;
			this.evolutions = response.evolutions;
			this.getImage();
		}.bind(this),
		error: function(error){
			console.log("error: " + error);			// If it doesn't work, show the error
		}
	});
};

PokemonApp.Pokemon.prototype.render = function () {		// Function to render the pokemon (common to all instances)
	
			var pokemon = this;
			// getImage(response);
			var titleInfo = `
				<span>${pokemon.name}</span>
				<small>#${pokemon.pkdx_id}</small>
				`
			$(".modal-title").empty();
			$(".modal-title").append(titleInfo);

			$(".js-pkmn-types").empty();
			$(".js-pkmn-types").html("<strong>Types: </strong>")
			$.each(pokemon.types, function (index, type) {
				$(".js-pkmn-types").append(" " + type.name + "&nbsp;");
			})
			$(".js-pkmn-height").html(pokemon.height)
			$(".js-pkmn-weight").html(pokemon.weight)
			$(".js-pkmn-hp").html(pokemon.hp)
			$(".js-pkmn-attack").html(pokemon.attack)
			$(".js-pkmn-defense").html(pokemon.defense)
			$(".js-pkmn-sp-attack").html(pokemon.sp_atk)
			$(".js-pkmn-sp-defense").html(pokemon.sp_def)
	
			$(".js-pokemon-modal").modal("show");

			$(".js-evolutions").empty();
			if (pokemon.evolutions.length > 0) {
				$.each(pokemon.evolutions, function (index, evolution) {
					$(".js-evolutions").append(" " + evolution.to + "&nbsp;");
				})
			} else {
				$(".js-evolutions").append("<p>This Pokemon has no evolutions.</p>");
			}
			this.showEvolutions();
		};



PokemonApp.Pokemon.prototype.getImage = function () {
	$.ajax({
		type: "GET",
		url: this.sprites[0].resource_uri,
		success: function(response){
			console.log(response);
			this.image = response.image;
			var pkmnImage = this.image;

			$(".js-pkmn-image").attr("src","http://pokeapi.co" + pkmnImage);
			this.getDescription();
		}.bind(this),
		error: function(error){
			console.log("error: " + error);			// If it doesn't work, show the error
		}
	});
};

PokemonApp.Pokemon.prototype.getDescription = function () {
	$.ajax({
		type: "GET",
		url: this.descriptions[this.descriptions.length -1].resource_uri,
		success: function(response){
			console.log(response);
			this.description = response.description;
			$(".js-pkmn-description").html(this.description);
			this.render();
		}.bind(this),
		error: function(error){
			console.log("error: " + error);			// If it doesn't work, show the error
		}
	});
};

PokemonApp.Pokemon.prototype.showEvolutions = function () {

	$(".js-btn-evolutions").on("click", function (event) {
		console.log("Evolutions");
		$(".js-evolutions-modal").modal("show");
	});
};


PokemonApp.idFromUri = function (pokemonUri) {		// Function to get the id from the uri
	var uriSegments = pokemonUri.split("/");		// Split the uri (because it looks like: "api/v1/pokemon/23/)
	var secondLast = uriSegments.length - 2;		// Get the second to last section (just before the last /)
	return uriSegments[secondLast];
}

$(document).on("ready", function () {

	$(".js-show-pokemon").on("click", function (event) {	// When you click on each Pokemon
		var button = $(event.currentTarget);				// Identifies what you are clicking on
		var pokemonUri = button.data("pokemon-uri");		// It gets the uri from the button

		var pokemon = new PokemonApp.Pokemon(pokemonUri);	// Makes an instance of Pokemon with that uri
		pokemon.fetchInfo();
										// Gets info about the Pokemon
	});

});