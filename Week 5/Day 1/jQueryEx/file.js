var phrases = [
	"You know how to whistle, don't you, Steve?",
	"We'll always have Paris.",
	"Here's looking at you, kid.",
	"This could be the beginning of a beautiful friendship.",
	"Fasten your seatbelts. It's going to be a bumpy ride."
];



function showPhrase(){
	$('#change-phrase').on('click', function () {
		var randomPhrase = Math.floor(Math.random()*phrases.length);
		$('#random-phrase').html(phrases[randomPhrase]);
	});
};

function addNewPhrase() {
	$('form').submit(function (event) {
		event.preventDefault();
		phrases.push(($('#newphrase').val()));
		$('#newphrase').val('');
	});
};

function displayPhrases() {
			$.each(phrases,function (index, value) {
			$('#phraselist').append("<li>"+value+"</li>");
		});	
};

function showHide() {
	$('.show-phrases').on('click', function(e){
		e.preventDefault();
			if ($('.show-phrases').text() == 'Show') {
				$('.show-phrases').html('Hide');
				displayPhrases();
			} else {
				$('.show-phrases').html('Show');
				$('#phraselist').empty();
			};
	});
};


$(document).on('ready', function () {
	showPhrase();
	addNewPhrase();
	showHide();
});

