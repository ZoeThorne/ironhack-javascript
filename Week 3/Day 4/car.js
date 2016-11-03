function Car(model, noise) {
	this.model = model;
	this.noise = noise;

}

Car.prototype = {
	wheels: 4,
	makeNoise:function () {
	console.log(this.noise);
}
}

fiat = new Car("Punto", "broom");
console.log(fiat);
console.log(fiat.wheels);
fiat.makeNoise();