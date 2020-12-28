const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particles=[]
var plinkos=[];
var divisions=[]

var ground;
var divisionHeight=300;
 
function setup() {
  createCanvas(600,600);
  engine = Engine.create();
    world = engine.world;

ground=new Ground (600,height-12,1200,20);

    for(var j=40;j<=width;j=j+50){

      plinkos.push(new Plinko(j,75));
    }
    
    for(var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175));
    
    }
    for(var j=15;j<=width;j=j+50){
      plinkos.push(new Plinko(j,275));
    
    }
    for(var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,375));
    
    }

for(var k=0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/7,10,divisionHeight));
}



}

function draw() {
  background("black");

  ground.display();


  if(frameCount%10===0){
    particles.push(new Particles(random(width/2-10,width/2),10,10));
  }


for(var j=0; j<particles.length; j++){
  particles[j].display();
  }

for(var j=0; j< plinkos.length;j++){
  plinkos[j].display();
}

for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}





  drawSprites();
}