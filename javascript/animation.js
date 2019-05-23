class Particle {
    constructor( x, y ) {
        this.m_x = x;
        this.m_y = y;
    }
    
    Draw( ) {
        let radius = 3;
        context.fillStyle = particle_color;
        context.beginPath( );
        context.arc( this.m_x, this.m_y, radius, kPi * 2, false );
        context.closePath( );
        context.fill( );
    }
    
    Link( other ) {
        context.lineWidth = 1.3;
        context.beginPath( );
        context.moveTo( m_x, m_y );
        context.lineTo( other.m_x, other.m_y );
        context.stroke( );
        context.closePath( );
    }
}

let kPi = 3.14159265358979323846, kDegToRad = kPi / 180.0, kRadToDeg = 180.0 / kPi;
    
rad = function( degrees ) { return degrees * kDegToRad; },
deg = function( radians ) { return radians * kRadToDeg; }


var canvas = { }, context = { }, particles = [ ], particle_color = "#f242f2", line_color = "#dc34f2",
    max_particles = 80, current_particle = { };

function CreateParticle( ) {
    var item = { };
    
    for( var i = 0; i < max_particles; ++i ) {
        particles.push( new Particle( Math.random( ) * canvas.width, Math.random( ) * canvas.height / i ) );
    }
}

function UpdatePosition( ) {
    var item = { };

    for( var i = 0; i < max_particles; ++i ) {
        item = particles[ i ];
        item.m_x += .020;
        item.m_y += .020;
    }
}

function DrawParticles( ) {
    context.clearRect( 0, 0, canvas.width, canvas.height );
    UpdatePosition( );
    for( var i = 0; i < max_particles; ++i ) {
        current_particle = particles[ i ];
        current_particle.Draw( );
    }
}

// https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da
function FixDpi() {
    //get DPI
    let dpi = window.devicePixelRatio;

    //create a style object that returns width and height
    let style = {
        height() {
            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
        },
        width() {
            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
        }
    }
    //set the correct attributes for a crystal clear image!
    canvas.setAttribute('width', style.width() * dpi);
    canvas.setAttribute('height', style.height() * dpi);
}

function Render( ) {
    // REMINDER: js you must make a new variable
    // var rad = 1.3;
    // console.log( "before: ", rad );
    // var converted = Deg( rad );
    // console.log( "after: ", converted );
    
    canvas = document.getElementById( 'main-canvas' );
    context = canvas.getContext( '2d' );
    FixDpi( );

    CreateParticle( );
    DrawParticles( );
}


Render( );