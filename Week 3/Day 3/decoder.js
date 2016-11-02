var sentence, message;

//words = ["dead", "bygone", "landing", "cheaply", "assumed", "incorrectly", "attention", "agent"];

sentence = "fill the proper tank for the cow";

function super_decode(sentence, indices, direction){
	var splitWords = sentence.split(' ');
		splitWords = splitWords.filter(function(word, index){
			return (indices == "even"? index % 2 == 0: index % 2 !=0);
		})
		splitWords = (direction == "backwards"? splitWords.reverse(): splitWords);
		return decoder(splitWords)

	}


	function decoder(words) {
	var index = 0;
	var secretMessage = '';
		for (var i = 0; i < words.length; i++) {
			secretMessage += words[i][index]
			if (index == 4) {
				index = 0;
			} else {
			index ++
		}
	}
	return secretMessage;
}


message = super_decode(sentence, "even", "backwards");
console.log(message)

// Or
//
// function decoder(words){
// var secretMessage = '';
// words.forEach(function(word, index){
//	secretMessage += word[index % 5]
// })
// return secretMessage;
// }