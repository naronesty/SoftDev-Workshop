//retrieve node in DOM via ID
var c = document.getElementById('slate');

var ctx = c.getContext("2d");

var mode = 'rect';
var fill = false;

var toggleMode = function(e) {
    console.log("toggling...");
    if (mode == 'rect') {
        mode = 'circle';
    }
    else {
        mode = 'rect';
    }
}

var clearMode = function() {
    console.log("erase mode...");
    mode = 'erase'
}

var drawRect = function(e) {
    ctx.strokeStyle = 'red'
    ctx.fillStyle = 'red'

    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    if (fill) {ctx.fillRect(0, 0, mouseX, mouseY);}
    else {ctx.strokeRect(0, 0, mouseX, mouseY);}

    console.log("mouseclick registered at ", mouseX, mouseY);
}

var drawCircle = function(e) {
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = 'blue'

    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, Math.min(mouseX, mouseY, 600-mouseX, 600-mouseY), 0, 2* Math.PI);

    if (fill) {ctx.fill();}
    else {ctx.stroke()}

    console.log("mouseclick registered at AJHAHAAHAHAH", mouseX, mouseY);
}

var erase = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    ctx.clearRect(mouseX-150, mouseY-100, 300, 200);
}

var draw = (e) => {
    if (mode == 'rect') {drawRect(event);}
    else if (mode == 'circle') {drawCircle(event);}
    else {erase(event);}
}

c.addEventListener('click', draw);
var bToggler = document.getElementById('buttonToggle');
bToggler.addEventListener('click', toggleMode);

var clearB = document.getElementById('buttonClear');
clearB.addEventListener('click', clearMode);

var bLine = document.getElementById('buttonLine');
bLine.addEventListener('click', function(){fill=false});

var bFill = document.getElementById('buttonFill');
bFill.addEventListener('click', function(){fill=true});