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
}
