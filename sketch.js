var wall;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);

  bullet = createSprite(50, 200, 50, 20);
bullet.velocityX = 2;
bullet.shapeColor = color("green");

wall = createSprite(1200,200,70,height/2);
wall.shapeColor = color("yellow");
}

function draw() {
  background("pink");  
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x + lbullet.widht;
wallleftEdge=lwall.x;
if(bulletRightEdge>=wallleftEdge);
{
  return true
}
return false;
}

if (hasCollided(bullet,wall))
  {
bullet.velocityX=0;
var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

if (damage>10)
{
  wall.shapeColor = color("blue");
}





if (damage<10)
{
  wall.shapeColor = color("red");

}
}


