class Paper {
    constructor(x,y,r){
      var   options = {
          isStatic : false,
          'restitution' : 0.3,
          'friction' : 0.5,
          'density' : 0.7,
          
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);
        this.image = loadImage("paper.png")
        
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      
      
      ellipseMode(RADIUS);
      translate(pos.x, pos.y);
      fill("yellow");
      //ellipse(0,0,this.r, this.r);
      image(this.image,0,0,this.r,this.r)
      pop();
    }
    
}