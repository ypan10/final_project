let circleX;
let circleY;
let circleSize;
let background_image

function preload(){
  table = loadTable('js/YinanPanDataCollection.csv', 'csv', 'header');
  background_image = loadImage('photos/background_image.gif');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")
  noFill();
  strokeWeight(3);
  circleX = width / 2;
  circleY = height / 2;
  circleSize = 0;

}

function draw(){
  background(0, 0, 0)
  image(background_image, 10, 10, windowWidth, windowHeight)
  circleSize += 10;

  stroke(0, 64, 128);
  circle(circleX, circleY, circleSize);
  circle(circleX, circleY, circleSize * .75);
  circle(circleX, circleY, circleSize * .5);
}

function mousePressed(){
  circleX = mouseX;
  circleY = mouseY;
  circleSize = 0;
}
