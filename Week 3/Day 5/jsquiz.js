var read = require('read');
var fs = require('fs');


function leaderboard(err, file){ 
    if (err) {
        throw err;
    }
    var getLeaderboard = JSON.parse(file); 
    getLeaderboard = getLeaderboard.sort(function (a,b){
		return b.totalPoints - a.totalPoints  
	});
    getLeaderboard.forEach(function(player) {
    	console.log(player.name + "\t" + player.totalPoints);
    })   
 }


function Question (id, category, question, answer){
	this.id = id;
	this.category = category;
	this.question = question;
	this.answer = answer;
}

Question.prototype = {
	points: 1
}

function Quiz() {
	this.questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13];
	this.counter = 0
	this.totalPoints = 0
	this.bonusCategory = ""
	this.startQuiz()
}

Quiz.prototype = {

	options:function(current_question) {
			return(
				{prompt:"Category: " + current_question.category + "\n" + current_question.question }
				)
		}
	,

	getAnswer: function(err, answer) {
				if (answer.toProperCase() === this.questions[this.counter].answer) {
					console.log("Correct!\n");
						if (this.questions[this.counter].category === this.bonusCategory) {
							this.totalPoints += 5
						} else {

						this.totalPoints++ }
					
				} else {
					console.log("Incorrect! The answer was " + this.questions[this.counter].answer + ".\n");
				}
				console.log("Current score: " + this.totalPoints);
				this.counter++
				this.askQ()
			},

	getName:function() {
		return ({prompt: "What's your name, champ?"});
	},

	userName:function(err, name) {
		fs.readFile("./leaderboard.json", function (err, data) {
			var json = JSON.parse(data)
			var newScore = {"name":name, "totalPoints": this.totalPoints};
			json.push(newScore);
			fs.writeFile("./leaderboard.json", JSON.stringify(json))
			console.log("Thanks for playing, " + name + ".\n\nHere is the scoreboard:");
			fs.readFile("./leaderboard.json", 'utf8', leaderboard);
		}.bind(this));

		
	},

	askQ:function() {
		var question = this.options(this.questions[this.counter]);
		if (this.counter == this.questions.length -1) {
			console.log("End of quiz! You scored " + this.totalPoints)
			read(this.getName(),this.userName.bind(this));
		} else {
			read(question, this.getAnswer.bind(this))};
		


	},

	categories:function() {
		return ({prompt: "Which category will be your bonus category?\n1) Geography\n2) Entertainment\n3) Literature\n4) Politics\n5) History\n6) Science\n"});
	},

	choice:function(err, chosenCategory) {
		
		switch (chosenCategory) {
			case "1":
				this.bonusCategory = "geography"
				break;
			case "2":
				this.bonusCategory = "entertainment"
				break;
			case "3":
				this.bonusCategory = "literature"
				break;
			case "4":
				this.bonusCategory = "politics"
				break;
			case "5":
				this.bonusCategory = "history"
				break;
			default:
				console.log("No bonus category chosen")
		}
		console.log("Your bonus category is " + this.bonusCategory);
		this.askQ()
	},

	startQuiz: function() {
		console.log("Welcome to the quiz!\n");
		var category = this.categories();
		read(category,this.choice.bind(this));		
	},

	

}

String.prototype.toProperCase = function() {
  var words = this.split(' ');
  var results = [];
  for (var i=0; i < words.length; i++) {
      var letter = words[i].charAt(0).toUpperCase();
      results.push(letter + words[i].slice(1));
  }
  return results.join(' ');
};


q1 = new Question (1, "geography", "What is the capital of Burkina Faso?", "Ouagadougou");
q2 = new Question (2, "entertainment", "What was the first film starring Humphrey Bogart and Lauren Bacall?", "To Have And Have Not")
q3 = new Question (3, "literature", "Who wrote the sci-fi-fantasy Discworld series?", "Terry Pratchett")
q4 = new Question (4, "politics", "Who is the president of China?", "Xi Jinping")
q5 = new Question (5, "history", "Who wrote the first ever computer programme?", "Ada Lovelace")
q6 = new Question (6, "science", "What is the atomic number of Molybdenum?", "42")
q7 = new Question (7, "geography", "Which is the only South American country with English as an official language?", "Belize")
q8 = new Question (8, "entertainment", "Which jazz artist's albums include Bitches Brew and Kind of Blue?", "Miles Davis")
q9 = new Question (9, "literature", "In the Harry Potter series, who is the professor of Herbology?", "Professor Sprout")
q10 = new Question (10, "politics", "Which country had the world's first openly gay president?", "Iceland")
q11 = new Question (11, "history", "In what year was the Battle of Hastings?", "1066")
q12 = new Question (12, "science", "What is the closest star system to our Solar System?", "Alpha Centurai")
q13 = new Question (13, "none", "filler", "filler")




quiz = new Quiz


