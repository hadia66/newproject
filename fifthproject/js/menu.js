$(document).ready(function (){
	$('.carousel').carousel({
		interval:4000
	});
});


$(function(){
	'use strict';
	$(".close-btn").click(function(){
		$(".menu").toggleclass("menu-open");
		$(this).toggleclass("open-btn");
	});
});

// $(function(){
// 	'use strict';
// 	$("#tag").click(function(){
// 		console.log()
// 	});
// });
var ticket=2000;
if(ticket<1500){
console.log("yes");
}else{
	console.log("its expensive")
}
