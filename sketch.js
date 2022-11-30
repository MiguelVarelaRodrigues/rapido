var hexa 

function setup() {
  createCanvas(1000,1000);
  hexa = createSprite (500,500,50,40)
  hexa.shapeColor = "red"
}

function draw() 
{
  background("yellow");
drawSprites ()
if (keyDown("w")){
hexa.y = hexa.y -4

} 

if (keyDown("s")){
  hexa.y = hexa.y +4
  
  } 
  if (keyDown("d")){
    hexa.x = hexa.x +4
    
    } 
    if (keyDown("a")){
      hexa.x = hexa.x -4
      
      } 




}




