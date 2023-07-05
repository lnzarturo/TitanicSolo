let Titanic;
let Note1;
let Note2;
let Note3;
let Note4;
let Note5;
let Note6;
let Note7;

let flute;
let leo;
let kate;
let frozen;
let zane;
let rose;
let necklace;
let scientist;

let leoY = -1000;
let kateY = -1000;
let frozenY = -1000;
let zaneY = -1000;
let roseY = -1000;
let necklaceY = -1000;
let scientistY = -1000;

function preload() {
  flute = loadImage("recorder.png");
  leo = loadImage("leo.png");
  kate = loadImage("kate.png");
  frozen = loadImage("frozen.png");
  zane = loadImage("zane.png");
  rose = loadImage("rose.png");
  necklace = loadImage("necklace.png");
  scientist = loadImage("scientist.png");

  Titanic = loadSound("underwater titanic song 3.mp3");
  Note1 = loadSound("Note1.mp3");
  Note2 = loadSound("Note2.mp3");
  Note3 = loadSound("Note3.mp3");
  Note4 = loadSound("Note4.mp3");
  Note5 = loadSound("Note5.mp3");
  Note6 = loadSound("Note6.mp3");
  Note7 = loadSound("Note7.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Titanic.loop();
  
  const fluteImg = select('#flute-img');
  if (fluteImg) {
    fluteImg.touchStarted(function() {
      return false;
    });
  }
  
   const leoImg = select('#leo-img');
  if (leoImg) {
    leoImg.touchStarted(function() {
      return false;
    });
  }
  
     const kateImg = select('#kate-img');
  if (kateImg) {
    kateImg.touchStarted(function() {
      return false;
    });
  }
  
     const frozenImg = select('#frozen-img');
  if (frozenImg) {
    frozenImg.touchStarted(function() {
      return false;
    });
  }
  
      const zaneImg = select('#zane-img');
  if (zaneImg) {
    zaneImg.touchStarted(function() {
      return false;
    });
  }
  
      const roseImg = select('#rose-img');
  if (roseImg) {
    roseImg.touchStarted(function() {
      return false;
    });
  }
  
      const necklaceImg = select('#necklace-img');
  if (necklaceImg) {
    necklaceImg.touchStarted(function() {
      return false;
    });
  }
  
      const scientistImg = select('#scientist-img');
  if (scientistImg) {
    scientistImg.touchStarted(function() {
      return false;
    });
  }
  
  // Disable right-click context menu for the canvas
  const canvas = select('#defaultCanvas0');
  if (canvas) {
    canvas.elt.oncontextmenu = function () {
      return false;
    };
  }
  
  // Disable long-press context menu on iOS
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
  });
}

function draw() {
  background(255, 204, 100);

  image(
    flute,
    windowWidth / 2 - (windowHeight * 0.142) / 2,
    0,
    windowHeight * 0.142,
    windowHeight
  );

  image(leo, windowWidth / 2 - windowHeight * 0.1, leoY, leo.width / 4, leo.height / 4);
  
  image(kate, windowWidth / 2 - windowHeight * 0.1, kateY, kate.width / 4, kate.height / 4);
  
  image(frozen, windowWidth / 2 - windowHeight * 0.1, frozenY, frozen.width / 4, frozen.height / 4);
  
  image(zane, windowWidth / 2 - windowHeight * 0.1, zaneY, zane.width / 4, zane.height / 4);
  
  image(rose, windowWidth / 2 - windowHeight * 0.1, roseY, rose.width / 4, rose.height / 4);
  
  image(necklace, windowWidth / 2 - windowHeight * 0.1, necklaceY, necklace.width / 4, necklace.height / 4);
  
  image(scientist, windowWidth / 2 - windowHeight * 0.1, scientistY, scientist.width / 4, scientist.height / 4);
}

function touchStarted() {
  if (
    mouseY > windowHeight * 0.42 &&
    mouseY < windowHeight * 0.47 &&
    mouseX > windowWidth / 2 - (windowHeight * 0.142) / 6 &&
    mouseX < windowWidth / 2 + (windowHeight * 0.142) / 6
  ) {
    Note1.loop();
    leoY = 10;
  }

  if (
    mouseY > windowHeight * 0.48 &&
    mouseY < windowHeight * 0.51 &&
    mouseX > windowWidth / 2 - (windowHeight * 0.142) / 6 &&
    mouseX < windowWidth / 2 + (windowHeight * 0.142) / 6
  ) {
    Note2.loop();
    kateY = 10;
  }

  if (
    mouseY > windowHeight * 0.55 &&
    mouseY < windowHeight * 0.57 &&
    mouseX > windowWidth / 2 - (windowHeight * 0.142) / 6 &&
    mouseX < windowWidth / 2 + (windowHeight * 0.142) / 6
  ) {
    Note3.loop();
  frozenY = 10;
  }

  if (
    mouseY > windowHeight * 0.62 &&
    mouseY < windowHeight * 0.64 &&
    mouseX > windowWidth / 2 - (windowHeight * 0.142) / 6 &&
    mouseX < windowWidth / 2 + (windowHeight * 0.142) / 6
  ) {
    Note4.loop();
   zaneY = 10;
  }

  if (
    mouseY > windowHeight * 0.7 &&
    mouseY < windowHeight * 0.72 &&
    mouseX > windowWidth / 2 - (windowHeight * 0.142) / 6 &&
    mouseX < windowWidth / 2 + (windowHeight * 0.142) / 6
  ) {
    Note5.loop();
     roseY = 10;
  }

  if (
    mouseY > windowHeight * 0.74 &&
    mouseY < windowHeight * 0.78 &&
    mouseX > windowWidth / 2 - (windowHeight * 0.142) / 6 &&
    mouseX < windowWidth / 2 + (windowHeight * 0.142) / 6
  ) {
    Note6.loop();
     necklaceY = 10;
  }

  if (
    mouseY > windowHeight * 0.82 &&
    mouseY < windowHeight * 0.86 &&
    mouseX > windowWidth / 2 - (windowHeight * 0.142) / 6 &&
    mouseX < windowWidth / 2 + (windowHeight * 0.142) / 6
  ) {
    Note7.loop();
     scientistY = 10;
  }
}

function mouseReleased() {
  Note1.stop();
  Note2.stop();
  Note3.stop();
  Note4.stop();
  Note5.stop();
  Note6.stop();
  Note7.stop();

  leoY = -1000;
  kateY = -1000;
  frozenY = -1000;
  zaneY = -1000;
  roseY = -1000;
  necklaceY = -1000;
  scientistY = -1000;
}


   
