const kPi = 3.14159265358979323846, particle_color = "#f242f2",
      max_particles = 80;

var canvas = { }, context = { }, particles = [ ];

// particle class
class Particle {
    constructor(x, y) {
        this.x_ = x;
        this.y_ = y;
        // assign a random speed to the particles
        this.x_speed_ = (Math.random() * (1.50 + 1.50) - 1.50);
        this.y_speed_ = (Math.random() * (1.50 + 1.50) - 1.50);
    }
    
    // draw function for the particles
    Draw() {
        this.x_ += this.x_speed_;
        this.y_ += this.y_speed_
        let radius = 4;
        if (window.screen.width <= 800)
            radius = 6;
        
        context.fillStyle = particle_color;
        context.beginPath();
        context.arc(this.x_, this.y_, radius, kPi * 2, false);
        context.closePath();
        context.fill();
    }
}

function DrawParticles() {    
    // clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    if ($(document).scrollTop() > 700)
        return;
    
    // populate the array
    if (particles.length < max_particles) {
        for (var i = 0; i < max_particles; ++i ) {
            particles.push(new Particle(Math.random() * canvas.width,
                            Math.random() * canvas.height));
        }
    }
    
    
    // iterate through and add the particles and move them
    particles.forEach((item, idx) => {
        Check(item);
        item.Draw();
    });
}

// check for speeds and walls of canvas
// sanity check of sorts
function Check(item) {
    // if the x is at the edge make them bounce off of the side
    if (item.x_ > canvas.width - 2 || item.x_ < 2)
        item.x_speed_ = -item.x_speed_;
        
    // if the y is at the top/bottom bounce off of the top/bottom
    if (item.y_ > canvas.height - 2 || item.y_ < 2)
        item.y_speed_ = -item.y_speed_;
    
    // reassign the speed so they are not too slow
    if ((item.x_speed_ < 0.75 && item.x_speed_ > -0.75) 
       || (item.y_speed_ < 0.75 && item.y_speed_ > -0.75)) {
        item.x_speed_ = (Math.random() * (1.50 + 1.50) - 1.50);
        item.y_speed_ = (Math.random() * (1.50 + 1.50) - 1.50);
    }
}

// thanks to this post with helping fix the blur
// https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da
function FixDpi() {
    // get DPI
    let dpi = window.devicePixelRatio;

    // create a style object that returns width and height
    let style = {
        height() {
            return +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
        }, width() {
            return +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
        }
    }
    
    //set the correct attributes for a crystal clear image!
    canvas.setAttribute("width", style.width() * dpi);
    canvas.setAttribute("height", style.height() * dpi);
}

$(document).ready(function() {
    let $max_height, $max_width;
    $max_width = canvas.width;
    $max_height = canvas.height;
    
    $(window).resize(function() {
        if( canvas.height <= $max_height * 0.90 || canvas.width <= $max_width * 0.90
            || canvas.height >= $max_height * 1.1 || canvas.width >= $max_width * 1.1 ) {
            $max_width = canvas.width;
            $max_height = canvas.height;
            particles = [ ];
        }
    });
});

function Render() {
    canvas = document.getElementById("main-canvas");
    context = canvas.getContext("2d");
    FixDpi();

    DrawParticles();
    window.requestAnimationFrame(Render);
}


Render();