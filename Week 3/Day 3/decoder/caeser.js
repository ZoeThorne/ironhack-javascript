function caesarCipher (message, shift) {
	message = message.split('');
  var nums = message.map(function (character, index) {
  	return character.charCodeAt(0);
  });
  var newNums = nums.map(function (number) {
  	if (shift == undefined) {
  		shift = -3;
  	} else {
  		shift = shift % 26;
  	}
  	if (number >= 65 && number <= 90)  {
  		if (number + shift > 90) {
  			return (number - 26 + shift);
  		} else if (number + shift < 65) {
  			return (number + 26 + shift);
  		} else {
  		return number + shift;
  		}
  	} else if  (number >= 97 && number <= 122) {
  		if (number + shift > 122) {
  			return (number - 26 + shift);
  		} else if (number + shift < 97) {
  			return (number + 26 + shift);
  		} else {
  		return number + shift;
  		}
  	}
  	else {
  		return number;
  	}
  });
  var encryptedMessage = newNums.map(function (character, index) {
  	return String.fromCharCode(character);
  })
  return encryptedMessage.join('');
}

var encrypted = caesarCipher("Et tu, brute?", -4);

console.log(encrypted);
//=> "Ap pq, ^nqpa?"

encrypted = caesarCipher("Et tu, brute?", 6);

console.log(encrypted);
//=> "Kz za, hxazk?"

encrypted = caesarCipher("Et tu, brute?");

console.log(encrypted);
//=> "Bq qr, _orqb?"

encrypted = caesarCipher("Et tu, brute?", -316);

console.log(encrypted);