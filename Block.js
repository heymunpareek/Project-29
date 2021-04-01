class Block {
    constructor(x, y,color) {
        var op={
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,50,50,op);
        this.width = 50;
        this.height = 50;
        this.color = color;
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color)
        stroke("black");
        strokeWeight(1.5);
        rect(0,0,this.width, this.height);
        pop()

        
    }
}