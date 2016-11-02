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

module.exports = decoder