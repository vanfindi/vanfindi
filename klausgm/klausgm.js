
var img;
var initials ='vf'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 150; // grey background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  grid = loadImage('https://vanfindi.github.io/game/griddy.jpg');
  paint = loadImage('https://vanfindi.github.io/game/paint.png');
  globe = loadImage('https://vanfindi.github.io/game/globe.png');
}

function setup() {
createCanvas(700, 600);  // canvas size
background(grid);  // background screen

// Create a color picker and set its position.
  myPicker = createColorPicker('deeppink');
  myPicker.position(715, 0);

  describe('color picker');

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function
  
  // color picker
  let c = myPicker.color();

 if (toolChoice == '1' ) {  // first tool
   
    fill(c);
    stroke(c);
    triangle(mouseX-60, mouseY+90, mouseX+60, mouseY+90, mouseX, mouseY);
    
  } else if (toolChoice == '2') { // second tool

    fill(c);
    stroke(c);
    rect(mouseX, mouseY, 100, 100);
    
  } else if (toolChoice == '3') { // third tool

    stroke(c);
    fill(c);
    ellipse(mouseX, mouseY, 100, 100);
    
  } else if (toolChoice == '4') {

    image(paint, mouseX-125, mouseY-50, 250, 250);
    
  } else if (key == '5') { // this tool calls a function
    push();
   blendMode(DIFFERENCE);
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);
  pop();
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
 
   image(globe, mouseX-125, mouseY-50, 320, 250)
    
  } else if (toolChoice == '7') {

    stroke(c);
    fill(0, 0, 0);
    rect(mouseX, mouseY, 100, 100);
    
  } else if (toolChoice == '8') {

    fill(c);
    rect(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '9') {

    fill(c);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(grid); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
