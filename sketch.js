let capture;
let cols, rows, size = 1;

function preload() {
  capture = createCapture(VIDEO);
}

function setup() {
  createCanvas(400, 400);
  capture.size(400, 400);
  capture.hide();
  cols = width / size;
  rows = height / size;
  noStroke();
}

function draw() {
  background(220);
  capture.loadPixels();

  if (capture.pixels.length > 0) {
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        let i = x * size;
        let j = y * size;
        let index = (j * capture.width + i) * 4;
        let r = capture.pixels[index];
        let g = capture.pixels[index + 1];
        let b = capture.pixels[index + 2];
        if(verifyColor(r,g,b)){
          fill([0,0,0]);
        }else{
          fill(r,g,b)
        }
        rect(i, j, size, size);
      }
    }
  }
}

function verifyColor(r, g, b) {
  return (
    r >= 142 && r <= 255 &&
    g >= 125 && g <= 255 &&
    b >= 53 && b <= 255
  );
}