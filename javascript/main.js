$( document ).ready( function( ) {
    "use strict"
    
    var $nav = $( "ul.nav" ),
        $hamburger = $( ".hamburger" ),
        $particle = $( ".particles-js" ),
        $item;
    
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
    
    $( window ).resize( function( ) {
         let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    } );
    
    $( "ol li:eq(0)" ).click( function( ) { $item = 0; } );
    $( "ol li:eq(1)" ).click( function( ) { $item = 1; } );
    $( "ol li:eq(2)" ).click( function( ) { $item = 2; } );
    $( "ol li:eq(3)" ).click( function( ) { $item = 3; } );
    
    $( "ol li" ).click( function( ) {
        $( "ul.projects li" ).hide( );
        $( "ul.projects li:eq(" + $item + ")" ).show( );
        
        $( "ul.information li" ).hide( );
        $( "ul.information li:eq(" + $item + ")" ).slideToggle( );
    } );
    
    $hamburger.click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );

    $( "ul.nav li a" ).click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );
} );