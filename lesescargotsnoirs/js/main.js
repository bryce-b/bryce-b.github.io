$( document ).ready( function( ) {
	"use strict"

	var $nav = $( "ul.nav" );
	
	$nav.hide( );
	$( ".hamburger" ).click( function( ) {
		$nav.slideToggle( "fast", function( ) { } );
	} );

	$( "ul.nav li a" ).click( function( ) {
		$nav.slideToggle( "fast", function( ) { } );
	} );
    
} );