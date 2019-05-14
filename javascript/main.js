$( document ).ready( function( ) {
    "use strict"
    
    var $nav = $( "ul.nav" ),
        $hamburger = $( ".hamburger" ),
        $particle = $( ".particles-js" );
    
    $nav.hide( );
    $hamburger.hide( );
    
    $( ".main-section" ).css( "max-height", $particle.height( ) );
    
    $( window ).scroll( function( ) {
        var $scroll = $( window ).scrollTop( ),
            $height = $( window ).height( );
        
        if( $scroll > $height / 2 ) {
            $hamburger.show( );
        } else {
            $hamburger.hide( );
            $nav.hide( );
        }
    } );
    
    $hamburger.click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );

    $( "ul.nav li a" ).click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );
} );