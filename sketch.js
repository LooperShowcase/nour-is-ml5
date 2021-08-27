let player;
let bgImg;
let playerImg;
let obsImg;
let obstacles = [];
let gOverImg;
let wordClassifier;

function preload() {
  bgImg = loadImage("background.jpg");
  playerImg = loadImage("player.png");
  obsImg = loadImage("obstacle.png");
  gOver = loadImage("game.over.png");

  let options = {
    probabilityTheshold: 0.85,
  };

  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(400, 400);
  player = new Player();
  wordClassifier.classify(heardword);
}

function heardword(error, results) {
  console.log(results[0].label + " " + results[0].confidence);
  if (results[0].label == "up") {
    player.jump();
  }
}

function draw() {
  background(bgImg);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs) == true) {
      image(gOver, width / 2 - 175, height / 2 - 160, 350, 350);
      noLoop();
    }
  }

  player.show();
  player.move();
}

function keyPressed() {
  if (key === " " || key === "w") {
    player.jump();
  }
}
