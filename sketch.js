function setup() {
  createCanvas(1000, 1000);
  background(255, 255, 255);
}

function draw() {

if (MouseIsPressed == true){
    line(mouseX, mouseY, pmouseX, pmouseY);
}
}
