// Team Big Bird Apocalypse :: Noakai Aronesty, Shadman Rakib, Alif Abdullah
// SoftDev pd2
// K31 -- Copying moar code for fun
// 2022-02-15
// 1000000 years


//access canvas and buttons via DOM
var c = document.getElementById('playground')
var dotButton = document.getElementById('buttonCircle')
var waitButton = document.getElementById('buttonWait');
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
var changeX = 1;
var changeY = 1;
var posX = Math.random() * c.offsetWidth;
var posY = Math.random() * c.offsetHeight;

var dvdLogo = new Image();
dvdLogo.src = "logo_dvd.jpg";

//var drawDot = function() {
  var drawDot = () => {
    if (requestID) {
      cancelAnimationFrame(requestID);
    }
    // dotButton.removeEventListener("click", drawDot);
  
    console.log("drawDot invoked...")
  
    if (growing) { radius++; }
    else { radius--; }
    if (radius <= 1) { growing = true; }
    if (radius >= 249) { growing = false; }
  
    clear(ctx);
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

var drawDVD = () => {
  console.log("nooooooo")

  if (requestID) {
    cancelAnimationFrame(requestID);
  }

  if (posX <= 1 || posX >= 500-75) {
    changeX *= -1;
  }
  if (posY <= 1 || posY >= 500-50) {
    changeY *= -1;
  }

  posX += changeX;
  posY += changeY;

  clear(ctx);
  ctx.drawImage(dvdLogo, posX, posY, 75, 50);

  requestID = requestAnimationFrame(drawDVD)

}

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
waitButton.addEventListener("click", drawDVD);
stopButton.addEventListener("click", stopIt);