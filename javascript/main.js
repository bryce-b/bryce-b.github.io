$( document ).ready( function( ) {
    var $length = $( "ul.preview li" ).length,
        $nav = $( "ul.nav" );
	
    $nav.hide( );
    $( ".hamburger" ).click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );

    $( "ul.nav li a" ).click( function( ) {
        $nav.slideToggle( "fast", function( ) { } );
    } );
    
}