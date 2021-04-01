class Rock {
    constructor(x, y) {
        var op={
            restitution:0.5,
            friction:1.0,
            density:1.5,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,25,op);
        this.radius = 25;
        this.image = loadImage("polygon.png");
       
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);           
        image(this.image,0,0,this.radius*2+10, this.radius*2+10);
        pop()

        
    }
}