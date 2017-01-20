var side = '';
$(document).ready(function(){
	$('.sides').mouseenter(function(){
		$(this).addClass('bounce');
	});

	$('.sides').mouseleave(function(){
		$(this).removeClass('bounce');
	});

});

//Function called after user selects a side to play
function selectedSide(value){
	side = value;
	$('#initGameContainer').hide();
	$('#boardContainer').show();

	initGame();
}

//Function responsible for starting the game
function initGame() {
	if(side === 'X') { //X starts playing

	}
	else {

	}
}

function makeMovement(element){
	alert($(element));
}
