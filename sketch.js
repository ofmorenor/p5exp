let img;

let sparkOrigin;
let sparks = [];
let sparksNumber = 30;
let startTime = millis();

function setup() {
  createCanvas(400, 268);
  img = loadImage('img/inlight.png', i => image(i, 0, 0, 400, 268));
  noStroke();
  fill(254, 248, 202);

  sparkOrigin = createVector(175, 216);

  for(let i = 0; i < sparksNumber; i ++){
    sparks.push(createSpark(sparkOrigin.x, sparkOrigin.y));
  }

  noLoop();
  setTimeout(loop, 2000);
}

function draw() {



  background(img);

  sparks.forEach(s => {
    if(
        Math.abs(s.position.x) > 399  || 
        Math.abs(s.position.x) < 1 || 
        Math.abs(s.position.y) > 267 ||
        Math.abs(s.position.y) < 1 
    ) {
      s.position = createVector(sparkOrigin.x, sparkOrigin.y);
      s.speed = Math.floor(Math.random() * (3 - 1) + 1);
    }

    s.position.add(s.velocity);

    s.draw();
  });
}

function createSpark(x, y){
  let spark = {
    position: createVector(x, y),
    velocity: p5.Vector.random2D(),
    speed: Math.floor(Math.random() * (3 - 1) + 1)
  };
  spark.draw = () => {rect(spark.position.x, spark.position.y, 1, 1)}
  spark.velocity.mult(spark.speed);

  return spark;
}