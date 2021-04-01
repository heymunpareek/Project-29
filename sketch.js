//constants
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

//variables
var engine, world;
var g1, g2, g3,g4;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21;
var a1, a2, a3, a4, a5,a6, a7, a8, a9, a10 ,a11 , a12, a13, a14, a15;
var rock;
var sling;
var gs = "onSling";


function setup() {
    createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    g1 = new Ground(500,950,1000,100);
    g2 = new Ground(450, 745, 300, 15);
    g3 = new Ground(800, 650, 250, 15);
    g4 = new Ground(100,847, 100, 107);

    //blocks
    createBlocks();

    //rock
    rock = new Rock(200,200);

    //sling
    sling = new SlingShot(rock.body, {x: 120, y: 632} )

}

function draw() {
    background(0);
    Engine.update(engine);


    g1.display();
    g2.display();
    g3.display();
    g4.display();

    //block 
    displayBlocks();

    push();
    rectMode(CENTER);
    fill("black");
    stroke("blue");
    strokeWeight(2);
    rect(500, 200, 500, 150);
    textAlign(CENTER);
    fill("white");
    stroke("white");
    strokeWeight(0);
    textSize(20);
    text("Drag the mouse and release to shoot",500,170)
    text("Press DOWN ARROW to get back the rock",500,240)

    pop();
    
}

function createBlocks() {
    b1 = new Block(325, 705, "lightblue")
    b2 = new Block(325+50, 705, "lightblue")
    b3 = new Block(325+100, 705, "lightblue")
    b4 = new Block(325+150, 705, "lightblue")
    b5 = new Block(325+200, 705, "lightblue")
    b6 = new Block(325+250, 705, "lightblue")

    b7 = new Block(350, 655, "pink");
    b8 = new Block(400, 655, "pink");
    b9 = new Block(450, 655, "pink");
    b10 = new Block(500, 655, "pink");
    b11 = new Block(550, 655, "pink");

    b12 = new Block(375, 655-50, "lightblue");
    b13 = new Block(375+50, 655-50, "lightblue");
    b14 = new Block(375+100, 655-50, "lightblue");
    b15 = new Block(375+150, 655-50, "lightblue");

    b16 = new Block(400, 555, "pink");
    b17 = new Block(400+50, 555, "pink");
    b18 = new Block(400+100, 555, "pink");

    b19 = new Block(425, 555-50, "lightblue");
    b20 = new Block(475, 555-50, "lightblue");

    b21 = new Block(450, 555-100, "pink");



    a1 = new Block(700, 610, "lightgreen")
    a2 = new Block(750, 610, "lightgreen")
    a3 = new Block(800, 610, "lightgreen")
    a4 = new Block(850, 610, "lightgreen")
    a5 = new Block(900, 610, "lightgreen")

    a6 = new Block(725, 560, "pink")
    a7 = new Block(725+50, 560, "pink")
    a8 = new Block(725+100, 560, "pink")
    a9 = new Block(725+150, 560, "pink")
    

    a10 = new Block(750, 510, "lightgreen")
    a11 = new Block(750+50, 510, "lightgreen")
    a12 = new Block(750+50+50, 510, "lightgreen")
    

    a13= new Block(775, 460, "pink")
    a14= new Block(775+50, 460, "pink")
    
    a15= new Block(800, 410, "lightgreen")
    
    
    
}

function displayBlocks() {
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();

    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();

    b12.display();
    b13.display();
    b14.display();
    b15.display(); 
    
    b16.display();
    b17.display();
    b18.display();

    b19.display();
    b20.display();

    b21.display();

    a1.display();
    a2.display();
    a3.display();
    a4.display();
    a5.display();
    a6.display();
    a7.display();
    a8.display();
    a9.display();
    a10.display();
    a11.display();
    a12.display();
    a13.display();
    a14.display();
    a15.display();

    rock.display();
    sling.display();
    

}
function mouseDragged () {
    if(gs === "onSling") {
        Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY});
    }    
}
function mouseReleased () {
    sling.fly();
    gs = "released";
}
function keyPressed() {
    if(keyCode === DOWN_ARROW && gs === "released") {
        gs = "onSling";
        Matter.Body.setPosition(rock.body, {x: 200, y: 200})
        sling.attach(rock.body);
    }
}
