var img;
var initials ='vf'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  bkgrd = loadImage('https://vanfindi.github.io/game/bkgrd.jpg');
  trex = loadImage('https://vanfindi.github.io/game/trex.png');
  brach = loadImage('https://vanfindi.github.io/game/brach.png');
  ptero = loadImage('https://vanfindi.github.io/game/ptero.png');
  shrub = loadImage('https://vanfindi.github.io/game/shrub.png');
  grass = loadImage('https://vanfindi.github.io/game/grass.png');
  egg = loadImage('https://vanfindi.github.io/game/egg.png');
}

function setup() {
createCanvas(700, 700);  // canvas size
background(bkgrd);   // background

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
  

 if (toolChoice == '1' ) {  // Trex
   
   image(trex, mouseX-125, mouseY-50, 250, 250);
    
  } else if (key == '2') { // Brachiosaurus
  
  image(brach, mouseX-125, mouseY-50, 350, 350);
  
  } else if (toolChoice == '3') { // Pterodactyl

     image(ptero, mouseX-125, mouseY-50, 210, 210);
     
  } else if (toolChoice == '4') { // Shrub

     image(shrub, mouseX-125, mouseY-50, 200, 200);
     
  } else if (key == '5') { // Grass
  
    image(grass, mouseX-125, mouseY-50, 200, 200);
    
  } else if (toolChoice == '6') { // Paint tool

   fill(c)
   stroke(c)
   circle(mouseX, mouseY, 30, 30);
   
  } else if (toolChoice == '7') { // Thin line

    stroke(c);
    strokeWeight(1.5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '8') { // Thick line

    stroke(c);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '9') { // Background (mountains)

    fill(c);
    stroke(c);
    triangle(mouseX-50, mouseY+70, mouseX+50, mouseY+70, mouseX, mouseY);
    
  } else if (toolChoice == '0') {
    
    image(egg, mouseX-125, mouseY-50, 150, 150);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
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
    background(bkgrd); // set the screen back to the background image
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
