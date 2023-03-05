class spike{
  constructor(x){
    this.spike = createSprite(x, wh - 15, 30, 30);
    this.spike.addImage(spikeImg);
    this.spike.scale = 0.5;
  };
  move(){
    var i;
    i = 0 - keyDown(RIGHT_ARROW);
    this.spike.position.x += i*10;
    this.edges = createEdgeSprites();
    this.spike.collide(this.edges[3]);
    if (this.spike.x <= 0){
      this.spike.x = ww;
    }
    
    
  }
  checkDeath(){
    if (this.spike.isTouching(cat)){
      ded.play();
      cat.tgewswf(AnimatdedImg);
    }
  }
  
}