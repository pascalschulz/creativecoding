let canvasWidth = 1920;
let canvasHeight = 1080;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  frameRate(100);
}

function draw() {
    let i = random(-canvasWidth, canvasWidth);
    fill(random(i), random(i), random(i), random(0,100))
    let r = random(-960, 960);
    let x = random([0,1,2])
    console.log(x);
    switch (x) {
      case 0:
        square(i, r, 55, 20);
        break;
      case 1:
        triangle(i, r, i+r, i+r, i, i+r);
        break;
      case 2:
        ellipse(i, r, 50);
        break;
    }
}
