var side = '';
$(document).ready(function(){
	$('.sides').mouseenter(function(){
		$(this).addClass('bounce');
	});

	$('.sides').mouseleave(function(){
		$(this).removeClass('bounce');
	});

});

/**
* Function called after user selects a side to play
* param {value} side selected
*/
function selectedSide(value){
	side = value;
	$('#initGameContainer').hide();
	$('#boardContainer').show();

	initGame();
}

/**
* Function responsible for starting the game
*/
function initGame() {
	if(side === 'X') { //X starts playing

	}
	else {

	}
}

/**
* Function called when the user makes his movement
* param {element} element/position clicked
*/
function makeMovement(element){
	if($(element).text() == ''){
		$(element).text(side);
	}
	if(checkWinner()) {
		setTimeout(function(){ alert('winner: ' + side); }, 100);

	}
}

/**
* Function called when the button 'Restart Game' is clicked.
* Restarts the game.
*/
function restartGame(){
	$('#boardContainer').hide();
	$('#initGameContainer').show();
	cleanBoard();
}

/**
* Function called to verify if the game is over and if there is a winner
*/
function checkWinner(){
	var pos11 = $('#11').text();
	var pos12 = $('#12').text();
	var pos13 = $('#13').text();
	var pos21 = $('#21').text();
	var pos22 = $('#22').text();
	var pos23 = $('#23').text();
	var pos31 = $('#31').text();
	var pos32 = $('#32').text();
	var pos33 = $('#33').text();

	//Same line
	if(pos11 == pos12 && pos12 == pos13 && pos11 != '') {
		return true;
	}

	if(pos21 == pos22 && pos22 == pos23 && pos21 != '') {
		return true;
	}

	if(pos31 == pos32 && pos32 == pos33 && pos31 != '') {
		return true;
	}

	//Same column
	if(pos11 == pos21 && pos21 == pos31 && pos11 != '') {
		return true;
	}

	if(pos12 == pos22 && pos22 == pos32 && pos12 != '') {
		return true;
	}

	if(pos13 == pos23 && pos23 == pos33 && pos13 != '') {
		return true;
	}

	//Diagonal
	if(pos11 == pos22 && pos22 == pos33 && pos11 != '') {
		return true;
	}

	if(pos13 == pos22 && pos22 == pos31 && pos13 != '') {
		return true;
	}
}

/**
* Cleans the board for the next game
*/
function cleanBoard() {
	var pos11 = $('#11').text('');
	var pos12 = $('#12').text('');
	var pos13 = $('#13').text('');
	var pos21 = $('#21').text('');
	var pos22 = $('#22').text('');
	var pos23 = $('#23').text('');
	var pos31 = $('#31').text('');
	var pos32 = $('#32').text('');
	var pos33 = $('#33').text('');
}
