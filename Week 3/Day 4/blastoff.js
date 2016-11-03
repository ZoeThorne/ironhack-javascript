function blastOff(time) {
	if (time < 0) {
		console.log("BLASTOFF!");
		return
	} else {
		console.log(time);
		setTimeout(function(){blastOff(time)}, 1000);
	}
	time--
}

blastOff(10)

// function ten() {
// 	console.log("10");
// 	setTimeout(nine, 1000);
// }

// function nine() {
// 	console.log("9");
// 	setTimeout(eight, 1000);
// }

// function eight() {
// 	console.log("8");
// 	setTimeout(seven, 1000);
// }

// function seven() {
// 	console.log("7");
// 	setTimeout(six, 1000);
// }

// function six() {
// 	console.log("6");
// 	setTimeout(five, 1000);
// }

// function five() {
// 	console.log("5");
// 	setTimeout(four, 1000);
// }

// function four() {
// 	console.log("4");
// 	setTimeout(three, 1000);
// }

// function three() {
// 	console.log("3");
// 	setTimeout(two, 1000);
// }

// function two() {
// 	console.log("2");
// 	setTimeout(one, 1000);
// }

// function one() {
// 	console.log("1");
// 	setTimeout(end, 1000);
// }

// function end() {
// 	console.log("BLASTOFF!");
// }

// setTimeout(blastoff, 1000);