var fixedBox;
var movingBox;
function setup() {
  createCanvas(800,400);
  fixedBox=createSprite(400, 200, 50, 50);
movingBox=createSprite(300,100,50,50);
}

function draw() {
  background(255,255,255);  
  movingBox.x=World.mouseX;
  movingBox.y=World.mouseY;
  if((movingBox.x-fixedBox.x)<=(movingBox.width/2+fixedBox.width/2)&&
  (fixedBox.x-movingBox.x)<=(movingBox.width/2+fixedBox.width/2)&&
  (movingBox.y-fixedBox.y)<=(movingBox.height/2+fixedBox.height/2)&&
  (fixedBox.y-movingBox.y)<=(movingBox.height/2+fixedBox.height/2)){
    fixedBox.shapeColor="blue";
    movingBox.shapeColor="blue";
  }else{
  fixedBox.shapeColor="green";
  movingBox.shapeColor="green";
  }
  drawSprites();
}