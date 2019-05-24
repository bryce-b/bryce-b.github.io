class Particle {
    constructor( x, y ) {
        this.m_x = x;
        this.m_y = y;
        this.m_x_speed = ( Math.random( ) * ( 1.50 + 1.50 ) - 1.50 );
        this.m_y_speed = ( Math.random( ) * ( 1.50 + 1.50 ) - 1.50 );
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
        context.moveTo( this.m_x, this.m_y );
        context.lineTo( other.m_x, other.m_y );
        context.stroke( );
        context.closePath( );
    }
    
    Distance( other ) {
        
    }
}

const kPi = 3.14159265358979323846, kDegToRad = kPi / 180.0, kRadToDeg = 180.0 / kPi;
    
rad = function( degrees ) { return degrees * kDegToRad; },
deg = function( radians ) { return radians * kRadToDeg; }


var canvas = { }, context = { }, particles = [ ], particle_color = "#f242f2", line_color = "#dc34f2",
    max_particles = 80, current_particle = { };

function CreateParticle( ) {
    var item = { };
    
    for( var i = 0; i < max_particles; ++i ) {
        particles.push( new Particle( Math.random( ) * canvas.width, Math.random( ) * canvas.height ) );
    }
}

function UpdatePosition( ) {
    var item = { }, distance_x = { }, distance_y = { }, distance = { };

    for( var i = 0; i < max_particles; ++i ) {
        item = particles[ i ];
        // random number
        item.m_x += item.m_x_speed;
        item.m_y += item.m_y_speed;
        /*for( var k = i + 1; k < max_particles; ++i ) {
            item2 = particles[ k ];
            distance_x = item.m_x - item2.m_x;
            distance_y = item.m_y - item2.m_y;
            distance = Math.sqrt( distance_x * distance_x + distance_y * distance_y );
            if( distance > 150 ) continue;
            
            item.Link( item2 );
        }*/
    }
}
function DrawParticles() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    UpdatePosition();
        
    for( var i = 0; i < max_particles; ++i ) {
        current_particle = particles[i];
        if( current_particle.m_x > canvas.width || current_particle.m_x < 0 )
            current_particle.m_x_speed = -current_particle.m_x_speed;
        
        if( current_particle.m_y > canvas.height || current_particle.m_y < 0 )
            current_particle.m_y_speed = -current_particle.m_y_speed;
            
        current_particle.Draw();
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
    window.requestAnimationFrame( Render );
}


Render( );