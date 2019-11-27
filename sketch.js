var illus;
let bumper, amp;
let cnv;
var volhistory = [];


function preload() {
  illus = loadImage("./assets/controler.jpg");
  bumper = loadSound("./assets/TG1_new.mp3");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(255);
  amp = new p5.Amplitude();
  amp.setInput(bumper);
  bumper.play();

  cnv.mouseClicked(function() {
   if (bumper.isPlaying() ){
     bumper.stop();
     stroke(255);
   } else {
     bumper.play();
   }
 });
}

function draw() {
  image(illus, (width / 4) - 100, height / 2, illus.width, illus.height);
  var vol = amp.getLevel();
  volhistory.push(vol);
  for (var i = 0; i < volhistory.length; i = i + 10) {
    var y = map(volhistory[i], 0, 1, height / 2, 0);
    point(i + 350, y + 60);
    stroke(255, 25, 0);
    strokeWeight(3);

    point(i + 350, y + 75);
    stroke(25, 255, 205);
    strokeWeight(3);

    point(i + 350, y + 45);
    stroke(179, 66, 245);
    strokeWeight(3);
  }

  var titlehome = " He seems to enjoy his work very much . . . ";
  drawingContext.font = "normal 13px Karla";
  drawingContext.textAlign = "RIGHT";
  fill(100);
  noStroke()
  text(titlehome, (width / 4)-220, (height / 2) + 150);

  var titlehome = " click to play with the pattern of the sound ";
  drawingContext.font = "normal 8px Karla";
  drawingContext.textAlign = "RIGHT";
  fill(200);
  noStroke()
  text(titlehome, (width / 4)-220, (height / 2) + 170);
}



  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
