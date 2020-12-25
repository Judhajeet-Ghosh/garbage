class Dustbin {
    constructor(x,y,width,height){
      var   options = {
          
          isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.body.width = width;
        this.body.height = height;
        World.add(world,this.body)
        this.image = loadImage("dustbingreen.png")
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      
      fill("red");
      //rect(pos.x,pos.y,this.body.width,this.body.height);
      image(this.image,500,500,160,160)
    }
      
}