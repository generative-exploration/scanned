let img;
let myFont;

var zeile = 0;
var positionY;
var positionX;
var scanhoehe = 1;


function preload() {
  img = loadImage("0213.jpg");
  myFont = loadFont('FiraCode-Regular.ttf');
}

function setup() {
  createCanvas(800, 1200);
  image(img, 0, 0);
  textFont(myFont);
  textSize(14);
  frameRate(30);
}

function draw() {
  copy(img, 0, height - 20, width, height, 0, height - 20, width, height);

  if (zeile == 0) {
    positionY = mouseY;
    positionX = int(map(mouseX, 0, width / 2, -5, 5));
  }

  if (mouseIsPressed) {
    positionY = mouseY;
    positionX = int(map(mouseX, 0, width / 2, -5, 5));
  } else {
    positionY = zeile;
  }

  copy(img, 0, positionY, width, scanhoehe, 0 - positionX, zeile, width - positionX, scanhoehe);

  zeile = zeile + scanhoehe;

  stroke('rgb(50%,50%,50%)');
  line(40, zeile + 2, width - 40, zeile + 2);

  if (zeile == height + 20) {
    zeile = 0;
    image(img, 0, 0);

  }

  fill(255);
  textAlign(CENTER);
  text("scan: " + zeile, width / 2, height - 5);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas(c, 'gen_exploration', 'jpg');
  }
}
