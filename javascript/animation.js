var canvas = { }, context = { }, particles = [ ], radius = { }, alpha = { }, particle_color = "#f242f2"; 

function CreateParticle( ) {
    
}

function DrawParticle( ) {
    context.clearRect( 0, 0, canvas.width, canvas.height );
    
    context.fillStyle = '#222222';
    context.fillRect( 0, 0, canvas.width, canvas.height );
    
    context.beginPath( );
    
    context.fill( );
}

function UpdatePosition( particle ) {
    
}

function Render( ) {
    canvas = document.getElementById( 'main-canvas' );
    context = canvas.getContext( '2d' );
    DrawParticle( );
}


Render( );