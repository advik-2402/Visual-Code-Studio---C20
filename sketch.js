var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(600, 400, 80, 60);
  fixedRect = createSprite(400,200,80,60);
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if ((movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2) &&
    (fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2) &&
    (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2) &&
  (fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 
  drawSprites();
}