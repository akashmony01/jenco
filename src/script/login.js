/* page loader script */
$(window).on('load', function(){
	$(".loader").addClass("hidden");
});

/* lang option opener */
$(document).ready(function(){
    $("#langOptionOpener").click(function(){
    	$("#langMenu").toggleClass('showed');
	});
});