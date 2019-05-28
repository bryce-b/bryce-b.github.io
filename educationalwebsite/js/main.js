$(document).ready(function() {
	"use strict"
	
	$("ul").hide();
	$(".hamburger").click(function() {
		$("ul").slideToggle("fast", function() {});
	});
	
	$("ul.nav li a").click(function() {
		$("ul").slideToggle("fast", function() {});
	});
});