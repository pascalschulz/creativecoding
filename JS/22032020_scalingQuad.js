let canvasWidth = 1920;
let canvasHeigth = 1080;
let x1 = 1;
let y1 = 2;
let x2 = 2;
let y2 = 3;
let x3 = 3;
let y3 = 2;
let x4 = 2;
let y4 = 1;
let scalefactor = 5;
let startPointX = canvasWidth/2;
let startPointY = canvasHeigth/2;


function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeigth);
  frameRate(1);
}

function draw() {
  noFill();
  console.log(x1, y1, x2, y2, x3, y3, x4, y4);
  quad(x1+startPointX, y1+startPointY, x2+startPointX, y2+startPointY,
     x3+startPointX, y3+startPointY, x4+startPointX, y4+startPointY);
  adaptQuad();
  increaseScaling();
}

function increaseScaling() {

  return scalefactor += 1;
}

function adaptQuad() {
  x1 = x1-scalefactor;
  y2 = y2+scalefactor;
  x3 = x3+scalefactor;
  y4 = y4-scalefactor;
}
