var decoder = require('./decode')

var sentence, message;



sentence = "fill the proper tank for the cow";

function super_decode(sentence, indices, direction){
	var splitWords = sentence.split(' ');
		splitWords = splitWords.filter(function(word, index){
			return (indices == "even"? index % 2 == 0: index % 2 !=0);
		})
		splitWords = (direction == "backwards"? splitWords.reverse(): splitWords);
		return decoder(splitWords)

	}

message = super_decode(sentence, "even", "backwards");
console.log(message)