function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(220);
  fill (color(255, 204, 200));
  // loop
  for(let i = 0; i < 255; i++) {
    // color based on loop value. Creates an ombre look
    fill (color(i, i + i, 200));
    // location then width and height
    // creates a sort of square based sideway pyramid
    rect (i + 255, i + 255, i, i);
    // the two cones will interest. Cone is made by ellipse
    // shows side of cone
    ellipse (255 - i, 255 - i, 255 - i, 255 - i);
    // shows front of cone
    ellipse (255 - i, i , i,  i);
  }
}