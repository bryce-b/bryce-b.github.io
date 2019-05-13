$( document ).ready( function( ) {
    "use strict"
    
    var $nav = $( "ul.nav" ),
        $hamburger = $( ".hamburger" );
    
    $nav.hide( );
    $hamburger.hide( );
    
    $( window ).scroll( function( ) {
        var $scroll = $( window ).scrollTop( ),
            $height = $( window ).height( );
        
        if( $scroll > $height / 2 ) {
            $( ".particles-js" ).hide( );
            $hamburger.show( );
        } else {
            $( ".particles-js" ).show( );
            $hamburger.hide( );
        }
    } );
    
    $hamburger.click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );

    $( "ul.nav li a" ).click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );
} );