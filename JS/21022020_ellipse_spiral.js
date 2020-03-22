let canvasWidth = 1980;
let canvasHeigth = 1080;
let ellipseWidth = 100;
let ellipseAngle = 1;
let ellipseAngleI = 0;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeigth);
  frameRate(20);
}

function draw() {
  let colourR = random(255);
  let colourG = random(255);
  let colourB = random(255);
  fill(colourR, colourG, colourB);

  calculateEllipseAngle();
  ellipse(returnEllipseX()+500, returnEllipseY()+500, 50);
}

function returnEllipseWidth() {
  return ellipseWidth=ellipseWidth+1;
}

function calculateEllipseAngle() {
  ellipseAngle = 0.3 * ellipseAngleI;
  ellipseAngleI +=1;
}

function returnEllipseX(){
  return (1+ellipseAngle)*cos(ellipseAngle);
}

function returnEllipseY() {
  return (1+ellipseAngle)*sin(ellipseAngle);
}
