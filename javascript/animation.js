const kPi = 3.14159265358979323846, particle_color = "#f242f2", line_color = "#dc34f2",
      max_particles = 80;

var canvas = { }, context = { }, particles = [ ];

// particle class
class Particle {
    constructor( x, y ) {
        this.m_x = x;
        this.m_y = y;
        // assign a random speed to the particles
        this.m_x_speed = ( Math.random( ) * ( 1.50 + 1.50 ) - 1.50 );
        this.m_y_speed = ( Math.random( ) * ( 1.50 + 1.50 ) - 1.50 );
    }
    
    // draw function for the particles
    Draw( ) {
        this.m_x += this.m_x_speed;
        this.m_y += this.m_y_speed
        const radius = 3;
        context.fillStyle = particle_color;
        context.beginPath( );
        context.arc( this.m_x, this.m_y, radius, kPi * 2, false );
        context.closePath( );
        context.fill( );
    }
}

function DrawParticles( ) {
    // clear the canvas
    context.clearRect( 0, 0, canvas.width, canvas.height );
    var item = { };

    // iterate through and add the particles and move them
    for( var i = 0; i < max_particles; ++i ) {
        particles.push( new Particle( Math.random( ) * canvas.width, Math.random( ) * canvas.height ) );
        item = particles[ i ];
        
        Check( item );
        item.Draw( );
    }
}

// check for speeds and walls of canvas
// sanity check of sorts
function Check( item ) {
    // if the x is at the edge make them bounce off of the side
    if( item.m_x > canvas.width - 2 || item.m_x < 2 )
        item.m_x_speed = -item.m_x_speed;
        
    // if the y is at the top/bottom bounce off of the top/bottom
    if( item.m_y > canvas.height - 2 || item.m_y < 2 )
        item.m_y_speed = -item.m_y_speed;
    
    // reassign the speed so they are not too slow
    if( item.m_x_speed < 0.75 && item.m_x_speed > -0.75 
       || item.m_y_speed < 0.75 && item.m_y_speed > -0.75 ) {
        item.m_x_speed = ( Math.random( ) * ( 1.50 + 1.50 ) - 1.50 );
        item.m_y_speed = ( Math.random( ) * ( 1.50 + 1.50 ) - 1.50 );
    }
}

// thanks to this post with helping fix the blur
// https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da
function FixDpi( ) {
    // get DPI
    let dpi = window.devicePixelRatio;

    // create a style object that returns width and height
    let style = {
        height( ) {
            return +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
        }, width( ) {
            return +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
        }
    }
    
    //set the correct attributes for a crystal clear image!
    canvas.setAttribute( "width", style.width( ) * dpi );
    canvas.setAttribute( "height", style.height( ) * dpi );
}

$( document ).ready( function( ) {
    let $max_height, $max_width;
    $max_width = canvas.width;
    $max_height = canvas.height;
    
    $( window ).resize( function( ) {
        if( canvas.height <= $max_height * 0.90 || canvas.width <= $max_width * 0.90
            || canvas.height >= $max_height * 1.1 || canvas.width >= $max_width * 1.1 ) {
            $max_width = canvas.width;
            $max_height = canvas.height;
            particles = [ ];
        }
    } );
} );

function Render( ) {    
    canvas = document.getElementById( "main-canvas" );
    context = canvas.getContext( "2d" );
    FixDpi( );

    DrawParticles( );
    window.requestAnimationFrame( Render );
}


Render( );