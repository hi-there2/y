var bg, bgImg
var cat, catImg1, catImg2, catImg3, catImg4, catImg5, catImg6, catImg7, catImg8, catRunAnimation;
var Night, NightImg1,NightImg2,NightImg3,NightImg4,NightSquish,NightWalkAnimation;
var spike1, spike2, spike3, spike4,spike5, spike6,spike7, spikeImg;
var ww, wh;
var ded, dedImg;
var score;

function preload(){
bgImg = loadImage("assets/bg.png")
ded = loadSound("assets/die.mp3");
catRunAnimation = loadAnimation("assets/catRun1.png","assets/catRun2.png","assets/catRun3.png","assets/catRun4.png","assets/catRun5.png","assets/catRun6.png","assets/catRun7.png","assets/catRun8.png")
NightWalkAnimation = loadAnimation("assets/Night1.png","assets/Night2.png","assets/Night3.png","assets/Night4.png");
spikeImg = loadImage("assets/Spike.png");
dedImg = loadImage("assets/dead_cat.png");
}

function setup(){
  wh = windowHeight;
  ww = windowWidth;
  createCanvas(ww,wh);
//background image
bg = createSprite(windowWidth/2,windowHeight/2);
bg.addImage(bgImg);      
bg.scale = 3;

cat = createSprite(600,490,50,50);
cat.addAnimation("run",catRunAnimation);
cat.addImage(dedImg);
cat.scale = 0.2;

Night = createSprite(410, 500, 30, 30);
Night.addAnimation("walk",NightWalkAnimation);
Night.scale = 0.1;

spike1 = new spike(100);
spike2 = new spike(300);
spike3 = new spike(500);
spike4 = new spike(700);
spike5 = new spike(900);
spike6 = new spike(1100);
//spike7 = new spike(2100);

}

function draw() {
  edges = createEdgeSprites()
  cat.collide(edges[3]);
  jump();
  spike1.move();
  spike2.move();
  spike3.move();
  spike4.move();
  spike5.move();
  spike6.move();
  //spike7.move();

  spike1.checkDeath();
  spike2.checkDeath();
  spike3.checkDeath();
  spike4.checkDeath();
  spike5.checkDeath();
  spike6.checkDeath();
  //spike7.checkDeath();*/
  Night.position.y = cat.position.y+10;
  if (keyDown(RIGHT_ARROW)){
    score +=1;
  }
  
  drawSprites();
  
}

function jump(){
  if (keyDown(UP_ARROW)&&cat.position.y>wh-50){
    cat.velocityY=-10
  }
  cat.velocityY+=0.8;
}

