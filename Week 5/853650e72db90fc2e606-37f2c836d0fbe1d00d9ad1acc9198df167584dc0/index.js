function fade() {
	$('#hide').on('click', function () {
		$('.container').fadeToggle(2000);
	});
}

function unicornMode() {
	$('#unicorn').on('click', function () {
		$('body').attr('style', 'background: linear-gradient(to bottom, rgb(242,48,203) 0%,rgb(242,235,38) 30%,rgb(41,137,216) 50%,rgb(39,244,63) 71%,rgb(226,133,40) 100%)');
	});
}

function checkForm() {
	$('form').submit(function (event) {
		if($("#email").val() === "" || $("#name").val() === "") {
			event.preventDefault();
			alert('You need to fill out all of the fields!');
		}
});
}

$(document).on('ready', function () {
	fade();
	unicornMode();
	checkForm();

});