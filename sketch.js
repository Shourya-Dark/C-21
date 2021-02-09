var movingRect, fixedRect;


function setup() {
  createCanvas(1366,768);
  movingRect = createSprite(800, 200, 50, 50);
  movingRect.shapeColor="green";
  fixedRect = createSprite(1000, 200, 50, 50);
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  

movingRect.x=mouseX;
movingRect.y=mouseY;

if(isTouching(movingRect,fixedRect)) {

  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}

else {

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

}




drawSprites();
}

function isTouching(object1,object2) {

if((object1.x-object2.x <= object1.width/2+object2.width/2) &&
 (object2.x-object1.x <= object1.width/2+object2.width/2) && 
 (object1.y-object2.y <= object1.height/2+object2.height/2) &&
 (object2.y-object1.y <= object1.height/2+object2.height/2))
 {
 return true;
 }
else {

  return false;
}
}
