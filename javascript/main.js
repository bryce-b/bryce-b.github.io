$( document ).ready( function( ) {
    "use strict"
    
    var $nav = $( "ul.nav" ),
        $hamburger = $( ".hamburger" ),
        $item = { },
        $projects = $( "button#projects" ),
        $project_list = $( "ol.projects" ),
        $second_projects = $( "ol.projects li" );
    
    $nav.hide( );
    $hamburger.hide( );
    
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
    
    $( "ol.projects li:eq(0)" ).click( function( ) { $item = 0; } );
    $( "ol.projects li:eq(1)" ).click( function( ) { $item = 1; } );
    $( "ol.projects li:eq(2)" ).click( function( ) { $item = 2; } );
    $( "ol.projects li:eq(3)" ).click( function( ) { $item = 3; } );
    $( "ol.projects li:eq(4)" ).click( function( ) { $item = 4; } );
    $( "ol.projects li:eq(5)" ).click( function( ) { $item = 5; } );
    $( "ol.projects li:eq(6)" ).click( function( ) { $item = 6; } );
    $( "ol.projects li:eq(7)" ).click( function( ) { $item = 7; } );
    
    $( "ol.projects li" ).click( function( ) {
        $( "ul.projects li" ).hide( );
        $( "ul.projects li" ).hide( );
        $( "ul.projects li:eq(" + $item + ")" ).slideToggle( );
        
        $( "ul.information li" ).hide( );
        $( "ul.information li:eq(" + $item + ")" ).slideToggle( );
    } );
    
    $projects.click( function( ) { 
        $project_list.slideToggle( "fast", function( ) { } );
        $second_projects.slideToggle( "fast", function( ) { } );
    } );
    
    $hamburger.click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );

    $( "ul.nav li a" ).click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );
    
    $( "ul.projects li" ).hide( );
    $( "ul.projects li:eq(0)" ).slideToggle( );
        
    $( "ul.information li" ).hide( );
    $( "ul.information li:eq(0)" ).slideToggle( );
} );