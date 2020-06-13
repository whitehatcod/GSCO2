var car, wall;
var speed, weight ;
function setup() {
  createCanvas(1600,400);
speed = random(55,90);
weight = random(400, 1500);
car= createSprite(50,200,50,30);
wall = createSprite(1200,200,60 ,400);
car.velocityX = speed;
wall.shapeColor= " black "
}
function draw() {
  background(255,255,255);  
  
  var deformation= 0.5 * weight * speed * speed/ 22509;
  if (car.collide(wall) ){
    car.velocityX= 0;
   
  if ( deformation < 100 ){
      car.shapeColor="green";
    }
   else if (deformation<180 && deformation>100)
    {
      car.shapeColor= "yellow";
    }
   else if (deformation>180 ) {
      car.shapeColor= "red";
    }
    }
  
    drawSprites();
  }