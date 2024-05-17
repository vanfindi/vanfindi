var img;
var initials ='vf'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 200; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  hair = loadImage('https://vanfindi.github.io/game/hair.png');
  fur = loadImage('https://vanfindi.github.io/game/fur.png');
  strays = loadImage('https://vanfindi.github.io/game/strays.png');
  tag = loadImage('https://vanfindi.github.io/game/tag.png');
  eyes = loadImage('https://vanfindi.github.io/game/eyes.png');
  yarn = loadImage('https://vanfindi.github.io/game/yarn.png');
  
}

function setup() {
createCanvas(700, 800);  // canvas size
background(200);   // background screen color

// Create a color picker and set its position.
  myPicker = createColorPicker('deeppink');
  myPicker.position(815, 0);

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

 if (toolChoice == '1' ) {  // hair
   
    image(hair, mouseX-125, mouseY-50, 150, 150);
    
  } else if (toolChoice == '2') { // fur

    image(fur, mouseX-125, mouseY-50, 150, 150);
    
  } else if (toolChoice == '3') { // stray hairs

    image(strays, mouseX-125, mouseY-50, 150, 150);
    
  } else if (toolChoice == '4') { // thick line

    stroke(c);
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // tag
  
   image(tag, mouseX-125, mouseY-50, 100, 100);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') { // eyes
 
   image(eyes, mouseX-125, mouseY-50, 180, 150)
    
  } else if (toolChoice == '7') { 

    stroke(c);
    fill(c);
    ellipse(mouseX, mouseY, 100, 100);
    
  } else if (toolChoice == '8') {

    stroke(c);
    strokeWeight(1);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '9') {

     image(yarn, mouseX-125, mouseY-50, 150, 150)
    
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    circle(mouseX, mouseY, 200, 150);
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
    background(screenbg); // set the screen back to the background color
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
