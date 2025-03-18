// @Author: Priyansh Kavani, 000881868;

const svgNS = "http://www.w3.org/2000/svg";

// This function will generate random balls in the svg background everytime it gets clicked.
function addBall( radius = 5 )  {
    let ball = document.createElementNS( svgNS, "circle" );
    cx=Math.floor((Math.random()*350)+40);            // Assigning particular area to random balls.
    ball.setAttribute( "cx", cx );
    cy=((Math.random()*350)+10).toFixed(0);
    ball.setAttribute( "cy", cy );

    ball.setAttribute( "r", radius );
    ball.setAttribute( "fill", "brown" );      // Brown coclor will be given to random ball.
    mySvg.appendChild(ball);
}

const circle = document.getElementById('circle');
const ground = 350;
let speed = 0;
let position = 50;
let count = 0;

// This function will bounce ball from top.
// If aroow down is clicked twice, the ball will bounce two time but the second bounce will bounce less.
function animate() {
  speed += 0.2;
  position += speed;

  if (position >= ground) {
    position = ground;
    speed = -speed * 0.5; // rebound with some loss of energy
  }

  circle.setAttribute('cy', position);

  if (position < ground) {
    requestAnimationFrame(animate);
  }
}

function startAnimation() {
    position = 50; // reset position to start
    speed = 0; // reset speed to start
    colorChange();
    animate();
    count = count + 1;
    counter();
  }

// This function will change color of the ball to the user input's color.
function colorChange(){
const color = document.getElementById('color');
const selectedColor = color.value;
circle.setAttribute('fill', selectedColor);
}
  
// The ball will dropped from top when the ball gets clicked.
circle.addEventListener('click', startAnimation);
  
// The ball will dropped from top when we press arrow down.
document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowDown') {
      startAnimation();
    }
});

// Counter function will count how many times the ball has been dropped from top.
function counter(){
    document.getElementById("counter").innerHTML = count;
}

