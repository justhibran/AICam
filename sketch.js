let pixelsRGB;
let pixels = [] , cols , rows, size = 5;
function preload() {
  capture = createCapture(VIDEO);
}
function setup() {
  createCanvas(400, 400);
  capture.size(400, 400);
  capture.hide();
  cols = width/size;
  rows = height/size;
  noStroke();

}
function draw() {
  background(220);
  for (let x = 0; x < cols; x++) {
    pixels[x] = []
  for (let y = 0; y < rows; y++) {
    let i = x*size;
    let j = y * size;
    pixels[x][y] = capture.get(i,j);
    fill(pixels[x][y]);
    rect(i,j,size,size);
  }
  
}
 frameRate(10) 
}