$( document ).ready( function( ) {
    "use strict"

    var step = 0,
        $length = $( "ul.preview li" ).length,
        $nav = $( "ul.nav" );
	
    $nav.hide( );
    $( ".hamburger" ).click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );

    $( "ul.nav li a" ).click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );
	
    $( ".button_right" ).click( function( ) {
        ++step;
    } );

    $( ".button_left" ).click( function( ) {
        --step;
    } );
	
    $( "button" ).click( function( ) {
        if( step < 0 ) {
            step += $length;
        }
		
        if( step >= $length ) {
            step = 0;
        }
		
        $( "ul.preview li" ).hide( );
        $( "ul.preview li:eq(" + step + ")" ).show( );
		
        $( "ul.text li" ).hide( );
        $( "ul.text li:eq(" + step + ")" ).toggle( "slide" );
        
        $( "#edit" ).text( "Showing steps for #" + ( step + 1 ) );
    } );
	
    $( "ul.preview li" ).hide( );
    $( "ul.preview li:eq(" + step + ")" ).show( );
    $( "ul.text li" ).hide( );
    $( "ul.text li:eq(" + step + ")" ).show( );
    $( "#edit" ).append( step + 1 );
} );