function setup() {
createCanvas(600, 600);
background('rgb(99, 231, 189)');
}

function draw() {
  
fill(238, 200, 185);
strokeWeight(3);
arc(185, 300, 80, 80, 0, PI+HALF_PI); //left ear
fill(238, 200, 185);
strokeWeight(3);
arc(415, 300, 80, 80, PI, TWO_PI+HALF_PI); //right ear

noFill();
stroke(134, 119, 120)
strokeWeight(4);
circle(170, 350, 30); //hoopr

noFill();
stroke(134, 119, 120)
strokeWeight(4);
circle(430, 350, 30); //hoopL
  
fill(238, 200, 185);
  stroke(51);
  strokeWeight(3);
  ellipse( 300, 300, 250, 300); //head

noFill();
  stroke("#87672f")
  strokeWeight(2); //left hair
  fill("#c4a164");
  bezier(300, 160, 100, 180, 250, 300, 160, 400);
 

stroke(51)
strokeWeight(3);
fill(240);
ellipse(240, 300, 80, 40); //left eye
stroke("#505432")
fill(110, 133, 86);
circle(245, 300, 25); //left pupil
fill("#505432")
circle(245, 300, 10); //left iris


fill(240);
ellipse(360, 300, 80, 40); //right eye
stroke("#505432")
fill(110, 133, 86);
circle(355, 300, 25); //right pupil
fill("#505432")
circle(355, 300, 10); //right iris

stroke(51)
circle(280, 350, 1); //mole

fill(220, 107, 125);
arc(300, 390, 40, 30, 5.5, PI + QUARTER_PI, CHORD); //mouth


fill(238, 200, 185);
arc(290, 340, 30, 30, 0, QUARTER_PI); //nose

fill(255, 246, 215);
arc(300, 650, 350, 350, PI, TWO_PI+HALF_PI); //body

}
