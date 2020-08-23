
$(document).ready(function(){
$(".one").mouseover(function(){
$(this).stop().animate({width:"300px"});

});
	
$(".one").mouseout(function(){
$(this).stop().animate({width:"250px"});
});
	
});


