// Team Big Bird Apocalypse :: Noakai Aronesty, Shadman Rakib, Alif Abdullah
// SoftDev pd2
// K31 -- Copying moar code for fun
// 2022-02-15
// 1000000 years


//access canvas and buttons via DOM
var c = document.getElementById('playground')
var dotButton = document.getElementById('buttonCircle')
var stopButton = document.getElementById('buttonStop')

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = 'BlueViolet'

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")

  // YOUR CODE HERE
};


var radius = 0;
var growing = true;

//var drawDot = function() {
var drawDot = () => {
  if (requestID) {cancelAnimationFrame(requestID);}
  // dotButton.removeEventListener("click", drawDot);

  console.log("drawDot invoked...")

  if (growing) { radius++; }
  else { radius--; }
  if (radius <= 1) { growing = true; }
  if (radius >= 249) { growing = false; }

  ctx.clearRect(0, 0, 500, 500);
  ctx.beginPath();
  ctx.arc(250, 250, radius, 0, 2 * Math.PI);
  ctx.fill();

  requestID = requestAnimationFrame(drawDot)

  /*
    ...to
    Wipe the canvas,
    Repaint the circle,

    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation.
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()

   */
};

//var stopIt = function() {
var stopIt = () => {
  // dotButton.addEventListener("click", drawDot);

  console.log("stopIt invoked...")
  console.log(requestID);

  cancelAnimationFrame(requestID);

  /*
    ...to
    Stop the animation

    You will need
    window.cancelAnimationFrame()
  */
};


dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);