function Viking(name, strength) {
	this.name = name;
	this.health = 100;
	this.strength = (Math.floor((Math.random() * 10) - 10)) + strength;
}

Viking.prototype = {
	pitFight:function(viking1, viking2) {
		var maxTurns = 10;
		for (var i = 1; i <= maxTurns; i++) {
			if ((viking1.health <= viking2.strength) || (viking2.health <= viking1.strength)) {
				viking1.health > viking2.health ? console.log(viking1.name + " is the winner!") : console.log(viking2.name + " is the winner!");
				break;
			}
			viking2.health -= viking1.strength;
			viking1.health -= viking2.strength;
			console.log("Round " + i + ": \n" + viking1.name + " has " + viking1.health + " remaining.\n" + viking2.name + " has " + viking2.health + " remaining. \n");
		}
	},

	rest:function() {
		this.health = 100;
		console.log(this.name + " has rested and now has " + this.health + " health.")
	},

	attack:function(viking, saxon) {
		var maxTurns = (Math.floor(Math.random() * 8) + 5);
		for (var i = 1; i <= maxTurns; i++) {
			if ((viking.health <= 0) || (saxon.health <= 0)) {
				viking.health > saxon.health ? console.log(viking.name + " is the winner!") : console.log("Oh no, " + viking.name + " is dead and he will forever be mourned!");
				break;
			}
			saxon.health -= viking.strength;
			viking.health -= saxon.strength;
			console.log("Round " + i + ": \n" + viking.name + " has " + viking.health + " remaining.\n The saxon has " + saxon.health + " remaining. \n");
		}
	},

	raid: function(){
		var vikingVictories = 0
		var saxonVictories = 0
		var p = -1;
		for (var q = 0; q <= saxons.length-1; q++) {
			if (p <= vikings.length-2) {
				p++
			} else {
				p = 0
			}
			this.attack(vikings[p], saxons[q]);
			if (saxons[q].health < 0) {
				vikingVictories++
			} else if (vikings[p].health < 0) {
				saxonVictories++
			}

		}
		console.log("Viking victories: " + vikingVictories + "\nSaxon victories: " + saxonVictories);
		vikingVictories > saxonVictories ? console.log("Victory to the vikings!") : console.log("Curses! The saxons resisted the attack.")
	}
}

function Saxon() {
	this.health = (Math.floor(Math.random() * 80) + 1);
	this.strength = (Math.floor(Math.random() * 20) + 1);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


olga = new Viking("Olga the Odious", 20);
glod = new Viking("Glod the Gigantic", 25);
barbara = new Viking("Barbara the Brave", 22);
wimpy = new Viking("Wimpy the Weak", 4);

vikings = [olga, glod, barbara, wimpy];

saxon1 = new Saxon();
saxon2 = new Saxon();
saxon3 = new Saxon();
saxon4 = new Saxon();
saxon5 = new Saxon();
saxon6 = new Saxon();

saxons = [saxon1, saxon2, saxon3, saxon4, saxon5, saxon6];

function game() {
	console.log("Let's start with the pit fights!");
	Viking.prototype.pitFight(olga, glod);
	olga.rest();
	glod.rest();
	console.log("Now let's attack the Saxon village...");
	shuffle(saxons);
	Viking.prototype.raid();
}


// Viking.prototype.attack(olga, saxon1);
// Viking.prototype.attack(glod, saxon3);

game()

