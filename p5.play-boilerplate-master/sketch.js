var canvas;
var backgroundImage
var player2
var player1
var powerups
var thunder
var meteor
var game
var block
var playerCount
var gameState 
var getElementId




function preload() {
  backgroundImage = loadImage("assets/pixel sky.jpg");
  playerImage = loadAnimation("assets/download.png");
  playerImage2=loadImage("assets/image.png")
   assaultRifle= loadImage("assets/gun.gif");
   thunder = loadImage("assets/lightning.gif");
    meteor= loadImage("assets/5.gif");
   sword = loadImage("assets/7.png");
   fruitImage= loadImage("assets/fruit2.png")
   fruitImage2= loadImage("assets/fruit.png")
   runnning1= loadImage("assets/RUNNING_STICKMAN.gif")
   a0= loadImage("Health/awkening/awaken0.png")
   a1= loadImage("Health/awkening/awaken1.png")
   a2= loadImage("Health/awkening/awaken2.png")
   a3= loadImage("Health/awkening/awaken3.png")
   a4= loadImage("Health/awkening/awaken4.png")
   hp1=loadImage("Health/health_full.png")
   hp2=loadImage("Health/health_full.png")
  half= loadImage("Health/half_hp.png")
  quarter1= loadImage("Health/health_quarterish.png")
  quarter2= loadImage("Health/health_quarterish.png")
  box1Img= loadImage("assets/box.png")
  box2Img= loadImage("assets/box.png")
  hp0img=loadImage("Health/awkening/0.png")
  hp4img=loadImage("Health/awkening/0.png")
  dartimg= loadImage("assets/Dart.png")

   m1img=loadImage("assets/terra2.png")
   terra =loadImage("assets/terra.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 // database = firebase.database();
  block1 = createSprite(0,725,6000,50)
  block2 = createSprite(400,250,200,20)
  block3= createSprite(1150,250,200,20)
  block4= createSprite(750,220,200,20)
  block4.addImage("block4",sword)
  block4.scale = 0.065
  block5= createSprite(0,1,6000,50)
  block6 = createSprite(1540,1,50,6000)
  block7 = createSprite(0,1,50,6000)

  fruit1 = createSprite(400,225,200,20)
  fruit2= createSprite(1150,225,200,20)

   fruit1.addImage("fruit1",fruitImage)
   fruit1.scale = 0.05
   fruit1.visible=true
   fruit2.addImage("fruit2",fruitImage2)
   fruit2.scale = 0.1

   fruit3 = createSprite(700,600,200,20)
   fruit3.scale = 0.05
   fruit3.visible=true
     
   dart=createSprite(750,360,20,20)
   dart.addImage("dart",dartimg)
   dart.visible=false


  player2 = createSprite(1400,650,10,10)
  player1 = createSprite(100,650,10,10)
  player2.addImage("player2",playerImage2)
  player2.scale = 0.25
  player1.addAnimation("player1",playerImage)
  player1.scale = 0.125

   hp=createSprite(101,650,40,10)
   hp.addImage("hp1",hp1)
   hp.scale=0.125

   hpr=createSprite(101,650,40,11)
   hpr.addImage("hp2",hp2)
   hpr.scale=0.125

   hphalf=createSprite(101,650,40,11)
   hphalf.addImage("half",half)
   hphalf.visible=false
   hphalf.scale=0.125

   hphalf2=createSprite(101,650,40,11)
   hphalf2.addImage("half",half)
   hphalf2.visible=false
   hphalf2.scale=0.125

   hp0=createSprite(101,650,40,11)
   hp0.addImage("hp",hp0img)
   hp0.visible=false
   hp0.scale=0.125

   hp4=createSprite(101,650,40,11)
   hp4.addImage("hp",hp4img)
   hp4.visible=false
   hp4.scale=0.125

   hpquarter=createSprite(101,650,40,11)
   hpquarter.addImage("quarter",quarter1)
   hpquarter.visible=false
   hpquarter.scale=0.125

   hpquarter2=createSprite(101,650,40,11)
   hpquarter2.addImage("quarter",quarter2)
   hpquarter2.visible=false
   hpquarter2.scale=0.125

   m1=createSprite(140,50,30,30)
   m1.addImage("m1",terra)
   m1.scale=0.20
   m1.visible=false

   m2=createSprite(140,50,30,30)
   m2.addImage("m2",m1img)
   m2.scale=0.35
   m2.visible=false
   
   box1=createSprite(200,300,30,30)
   box1.addImage("box1",box1Img)
   box1.scale=0.5
   box1.visible=true

   box2=createSprite(900,50,30,30)
   box2.addImage("box2",box2Img)
   box2.scale=0.5
   box2.visible=true
}



function draw() {
  background(backgroundImage);
  text (mouseX +","+mouseY,mouseX,mouseY)
  
  hp.x=player1.x
  hp.y=player1.y 

  hpr.x=player2.x
  hpr.y=player2.y

  hphalf.x=player1.x
  hphalf.y=player1.y
   
  hphalf2.x=player2.x
  hphalf2.y=player2.y

  hpquarter2.x=player2.x
  hpquarter2.y=player2.y

  hpquarter.x=player1.x
  hpquarter.y=player1.y
  
  m2.x=player2.x
  m2.y=player2.y 

  m1.x=player1.x
  m1.y=player1.y 

 

  if(keyIsDown(UP_ARROW)){
   player1.velocityY =-12
  }
  
  if(keyIsDown(DOWN_ARROW)){
   player1.velocityY = 0
   player1.velocityX=0
  }

  if(keyIsDown(RIGHT_ARROW)){
    player1.velocityX = 5
   }

   if(keyIsDown(LEFT_ARROW)){
    player1.velocityX = -4.5
   }

// /
   if(keyCode===(47)){
      m1.visible=true
  setTimeout(() =>   {m1.visible=false},500);
   }


   

   if(player1.isTouching(fruit1)){
    //async function wait(){
    player1.velocityX = 10
    fruit1.visible=false
    setTimeout(() =>   {fruit1.visible=true},13000);
    //await sleep(1000)
    setTimeout(() =>   {player1.velocityX = 0},5000);
   // }
   }

   if(player2.isTouching(fruit1)){
    //async function wait(){
    player2.velocityX = 10
    fruit1.visible=false
    setTimeout(() =>   {fruit1.visible=true},13000);
    //await sleep(1000)
    setTimeout(() =>   {player2.velocityX = 0},5000);
   // }
   }

   
   if(player1.isTouching(fruit3)){
    //async function wait(){
    player1.velocityX = 10
    fruit1.visible=false
    setTimeout(() =>   {player1.visible=false},1);
    //await sleep(1000)
    setTimeout(() =>   {dart.visible=true},5);
    setTimeout(() =>   {player2.velocityX = 0},1);
    setTimeout(() =>   {player2.velocityY = 0},1);
    setTimeout(() =>   {player1.velocityX = 0},1);
    setTimeout(() =>   {player1.velocityY = 0},1);
   // }
   }

   if(player2.isTouching(fruit3)){
    //async function wait(){
    player2.velocityX = 10
    fruit1.visible=false
    setTimeout(() =>   {player2.visible=false},1);
    //await sleep(1000)
    setTimeout(() =>   {dart.visible=true},1);
    setTimeout(() =>   {player2.velocityX = 0},1);
    setTimeout(() =>   {player2.velocityY = 0},1);
    setTimeout(() =>   {player1.velocityX = 0},1);
    setTimeout(() =>   {player1.velocityY = 0},1);
   // }
   }




   if(player1.isTouching(fruit2)){
    //async function wait(){
    player1.velocityX = 100
    player1.velocityY = -10
    fruit2.visible=false
    setTimeout(() =>   {fruit2.visible=true},20000);
    //await sleep(1000)
    setTimeout(() =>   {player1.velocityX = 0},1000);
   // }
   }

   if(player2.isTouching(fruit2)){
    //async function wait(){
    player2.velocityX = -100
    player2.velocityY = -10
    fruit2.visible=false
    setTimeout(() =>   {fruit2.visible=true},20000);
    //await sleep(1000)
    setTimeout(() =>   {player2.velocityX = 0},1000);
   // }
   }




   if(player1.isTouching(box1)){
    box1.visible=false
    setTimeout(() =>   {box1.visible=true},30001);
    m1.visible=true
   }

   if(player2.isTouching(box2)){
    box2.visible=false
    setTimeout(() =>   {box2.visible=true},30000);
    m2.visible=true
  }
     

  







  player1.velocityY = player1.velocityY +0.8
  
  player1.bounceOff(block1)
 player1.bounceOff(block5)
 player1.bounceOff(block6)
 player1.bounceOff(block7)
player1.bounceOff(block2)
player1.bounceOff(block3)


m1.x=player1.x
m1.y=player1.y 

//W
if(keyCode===119){
 player2.velocityY =-12
}
//S
if(keyCode===115){
 player2.velocityY = 0
 player2.velocityX=0
}
//A
if(keyCode===97){
  player2.velocityX = -5
 }
//D
 if(keyCode===100){
  player2.velocityX = 4.5
 }

 //f
 if(keyCode===102){
  
  m2.visible=true
 setTimeout(() =>   {m2.visible=false},500);
}

 if(player2.isTouching(fruit1)){
  //async function wait(){
  player2.velocityX = 10
  fruit1.visible=false
  //await sleep(1000)
   player2.velocityX = 0
 // }
 }


player2.velocityY = player2.velocityY +0.8

player2.bounceOff(block1)
player2.bounceOff(block5)
player2.bounceOff(block6)
player2.bounceOff(block7)
player2.bounceOff(block2)
player2.bounceOff(block3)

if(hp.isTouching(m2)){
hp.visible=false
hphalf.visible=true
m2.visible=false

}

if(hpr.isTouching(m1)){
  hpr.visible=false
  hphalf2.visible=true
  m1.visible=false

  }
  if(m1.isTouching(m2)){
  
    setTimeout(() =>   {if(hphalf.isTouching(m2)){
      hphalf.visible=false
      hpquarter.visible=true
      m2.visible=false
    }},7000);

    setTimeout(() =>   {if(hphalf2.isTouching(m1)){
      hphalf2.visible=false
      hpquarter2.visible=true
      m1.visible=false
    }},7000);

    setTimeout(() =>   {if(hphalf2.isTouching(m1)){
      hphalf2.visible=false
      hpquarter2.visible=true
      m1.visible=false
    }},13000);

    setTimeout(() =>   {if(hpquarter2.isTouching(m1)){
      hpquarter2.visible=false
      hp4.visible=true
      m1.destroy
    }},15000);

    setTimeout(() =>   {if(hpquarter2.isTouching(m1)){
      hpquarter1.visible=false
      hp0.visible=true
      m2.destroy
    }},20000);

  
}
  drawSprites()

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}











