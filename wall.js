class Wall{
    constructor(x,y,width,height){
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.wall=createSprite(x,y,width,height);
       }
         display(){
        drawSprites();
       
         }
       
}