/*global $, alert, console*/
$(document).ready(function (){
	$('.carousel').carousel({
		interval:4000
	});
});
$(function () {
	'use strict';
	// $('html').niceScroll();
	$('.header .arrow i').click(function () {
		$('html, body').animate({
			scrollTop: $('.helping').offset().top
		}, 1000);
	});
	$('.top-right h3').click(function () {
		$('html, body').animate({
			scrollTop: $('.products').offset().top
		}, 1000);
	});
	$('.fa-camera, .fa-camera-retro, .fa-print, .fa-ellipsis-h').click(function () {
		$('html, body').animate({
			scrollTop: $('.images-1').offset().top
		}, 1000);
	});
	$('.show-1').click(function (){
		$('.products-nikon').removeClass('active').addClass('hidden').fadeOut();
		$('.products-sony').removeClass('active').addClass('hidden').fadeOut();
		$('.products-canon').removeClass('hidden').addClass('active').fadeIn();
	});
	$('.show-2').click(function (){
		$('.products-canon').removeClass('active').addClass('hidden').fadeOut();
		$('.products-sony').removeClass('active').addClass('hidden').fadeOut();
		$('.products-nikon').removeClass('hidden').addClass('active').fadeIn();
	});
	$('.show-3').click(function (){
		$('.products-canon').removeClass('active').addClass('hidden').fadeOut();
		$('.products-nikon').removeClass('active').addClass('hidden').fadeOut();
		$('.products-sony').removeClass('hidden').addClass('active').fadeIn();		
	});
	$('.act-1').click(function (){
		$('.fa-heart').removeClass('active').addClass('hidden').fadeOut();
		$('.faa-pulse').removeClass('hidden').addClass('active').fadeIn();
	});
	$('.act-2').click(function (){
		$('.faa-pulse').removeClass('active').addClass('hidden').fadeOut();
		$('.fa-heart').removeClass('hidden').addClass('active').fadeIn();
		$('.faa-pulse').removeClass('active').addClass('hidden').fadeOut();
	});
});
var scrollButton=$("#scroll-top");
$(window).scroll(function (){
	console.log($(this).scrollTop());
	if($(this).scrollTop()>=600)
		{scrollButton.show();}
	else{scrollButton.hide();}
});
scrollButton.click(function (){
	$("html, body").animate({scrollTop:0},600);
});
$(function () {
	'use strict';
	$('.fa-camera').click(function (){
		$('.images-2').removeClass('active').addClass('hidden').fadeOut();
		$('.images-3').removeClass('active').addClass('hidden').fadeOut();
		$('.images-4').removeClass('active').addClass('hidden').fadeOut();
		$('.images-1').removeClass('hidden').addClass('active').fadeIn();

	});
	$('.fa-camera-retro').click(function (){
		$('.images-1').removeClass('active').addClass('hidden').fadeOut();
		$('.images-3').removeClass('active').addClass('hidden').fadeOut();
		$('.images-4').removeClass('active').addClass('hidden').fadeOut();
		$('.images-2').removeClass('hidden').addClass('active').fadeIn();
	});
	$('.fa-search ').click(function (){
		$('.images-2').removeClass('active').addClass('hidden').fadeOut();
		$('.images-3').removeClass('active').addClass('hidden').fadeOut();
		$('.images-4').removeClass('active').addClass('hidden').fadeOut();
		$('.images-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.fa-print').click(function (){
		$('.images-1').removeClass('active').addClass('hidden').fadeOut();
		$('.images-2').removeClass('active').addClass('hidden').fadeOut();
		$('.images-4').removeClass('active').addClass('hidden').fadeOut();
		$('.images-3').removeClass('hidden').addClass('active').fadeIn();
	});
	$('.fa-ellipsis-h').click(function (){
		$('.images-1').removeClass('active').addClass('hidden').fadeOut();
		$('.images-2').removeClass('active').addClass('hidden').fadeOut();
		$('.images-3').removeClass('active').addClass('hidden').fadeOut();
		$('.images-4').removeClass('hidden').addClass('active').fadeIn();
	});
});








$(function () {
	'use strict';
	$('.view-1').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-1').offset().top
		}, 1000);
	});
	$('.view-1').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-2').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-2').offset().top
		}, 1000);
	});
	$('.view-2').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-3').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-3').offset().top
		}, 1000);
	});
	$('.view-3').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-4').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-4').offset().top
		}, 1000);
	});
	$('.view-4').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
	});
});









$(function () {
	'use strict';
	$('.view-11').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-11').offset().top
		}, 1000);
	});
	$('.view-11').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-22').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-22').offset().top
		}, 1000);
	});
	$('.view-22').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-33').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-33').offset().top
		}, 1000);
	});
	$('.view-33').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-44').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-44').offset().top
		}, 1000);
	});
	$('.view-44').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
});











$(function () {
	'use strict';
	$('.view-111').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-111').offset().top
		}, 1000);
	});
	$('.view-111').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-333').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-333').offset().top
		}, 1000);
	});
	$('.view-333').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-444').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-444').offset().top
		}, 1000);
	});
	$('.view-444').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-555').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-555').offset().top
		}, 1000);
	});
	$('.view-555').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
});











$(function () {
	'use strict';
	$('.view-1111').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-1111').offset().top
		}, 1000);
	});
	$('.view-1111').click(function (){
		$('.carousel-1111').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-2222').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-2222').offset().top
		}, 1000);
	});
	$('.view-2222').click(function (){
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2222').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-3333').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-3333').offset().top
		}, 1000);
	});
	$('.view-3333').click(function (){
		$('.carousel-3333').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
	$('.view-4444').click(function () {
		$('html, body').animate({
			scrollTop: $('.carousel-4444').offset().top
		}, 1000);
	});
	$('.view-4444').click(function (){
		$('.carousel-4444').removeClass('hidden').addClass('active').fadeIn();
		$('.carousel-2222').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-111').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-333').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-444').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-555').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-11').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-33').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-44').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-22').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-1').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-2').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-3').removeClass('active').addClass('hidden').fadeOut();
		$('.carousel-4').removeClass('active').addClass('hidden').fadeOut();
	});
});




