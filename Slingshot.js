  
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.14,
            length: 20
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);

        this.s1 = loadImage("sling1.png");
        this.s2 = loadImage("sling2.png");
        this.s3 = loadImage("sling3.png");
        
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body) {
        this.sling.bodyA = body
    }

    display(){
        image(this.s1, 120, 600);
        image(this.s2, 90, 600);


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(79, 46, 20)
            if(pointA.x < 200) {
                strokeWeight(4);
                line(pointA.x -25, pointA.y, pointB.x- 10, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 30, pointB.y - 3)
                image(this.s3, pointA.x - 30, pointA.y- 10, 15, 30)
            }

            else {
                strokeWeight(4);
                line(pointA.x +25, pointA.y, pointB.x- 10, pointB.y);
                line(pointA.x +25, pointA.y, pointB.x + 30, pointB.y - 3)
                image(this.s3, pointA.x + 25, pointA.y- 10, 15, 30)
            }
            
        }
    }
    
}