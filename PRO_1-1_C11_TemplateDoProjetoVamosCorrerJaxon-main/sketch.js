var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path=createSprite(200,0)
path.velocityY=4
path.addImage(pathImg)
path.scale= 1.2
//Criando menino que corre 
boy=createSprite(200,340,30,30)
boy.addAnimation("boy",boyImg)
boy.scale= 0.08
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,200,20,400);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(400,200,20,400);
rightBoundary.visible = false;
}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
boy.x = World.mouseX
boy.collide(leftBoundary);
boy.collide(rightBoundary)


 //Reiniciar o fundo
 if (path.y > 400){
path.y = 0
 }



 drawSprites();
}