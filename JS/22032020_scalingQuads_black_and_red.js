let canvasWidth = 1580;
let canvasHeigth = 890;
let x1 = 1;
let y1 = 2;
let x2 = 2;
let y2 = 3;
let x3 = 3;
let y3 = 2;
let x4 = 2;
let y4 = 1;
let resetValuesStore = [x1, y1, x2, y2, x3, y3, x4, y4];
let scalefactor = 1;
let startPointX = canvasWidth/2;
let startPointY = canvasHeigth/2
let color = "black"

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeigth);
  frameRate(100);
}

function draw() {
  stroke(color);
  noFill();

  console.log(x1, y1, x2, y2, x3, y3, x4, y4);

  quad(x1+startPointX, y1+startPointY, x2+startPointX, y2+startPointY,
     x3+startPointX, y3+startPointY, x4+startPointX, y4+startPointY);

  adaptQuad();
  increaseScaling();

  if(checkYAxisLeavingScreen()){
    resetValues();
    createNewStartingPoint();
    changeColor(color);
    scalefactor = 1;
  }
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

function checkYAxisLeavingScreen() {
  if ((y2+startPointY) > canvasHeigth || (y4+startPointY) < 0) {
    return true;
  }
}

function resetValues() {
  x1 = resetValuesStore[0];
  y1 = resetValuesStore[1];
  x2 = resetValuesStore[2];
  y2 = resetValuesStore[3];
  x3 = resetValuesStore[4];
  y3 = resetValuesStore[5];
  x4 = resetValuesStore[6];
  y4 = resetValuesStore[7];
}

function createNewStartingPoint() {

  startPointX = random(canvasWidth);
  startPointY = random(canvasHeigth);
}

function changeColor(colorTemp) {
  if (colorTemp == "black") {
    color = "red";
  } else {
    color = "black";
  }
}
