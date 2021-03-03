var start;
var startbuttton;
var bg;
var gameStates;
var bg2,bg3,b5,b6,b7,b8,b9,b10,b11;
var crossroad,deadend,dead,highwaycode,highway;
var landslide,land,nostoppingorstanding,standing,nouturn,turn,oneway,way,recycle,yes,righthandcurve,curve;
var slipperyroad,road,slope,so,speedlimit,limit,stoping,opo,warning,ing,workinprogress,progress;



function preload(){
  start=loadImage("images/startbutton.png");
  bg=loadImage("images/bg.jpg");
  bg2=loadImage("images/b2.jpg");
  bg3=loadImage("images/b3.jpg");
  b5=loadImage("images/b5.jpg");
  b6=loadImage("images/b6.jpg");
  b7=loadImage("images/b7.jpg");
  b8=loadImage("images/b8.jpg");
  b9=loadImage("images/b10.jpg");
  b10=loadImage("images/b11.jpg");
  b11=loadImage("images/b12.jpg");
  b12=loadImage("images/b13.jpg");
  b13=loadImage("images/b14.jpg");
  b14=loadImage("images/b15.png");
  b15=loadImage("images/b16.jpg");
  crossroad=loadImage("images/crossroad.png");
  deadend=loadImage("images/deadend.png");
  highwaycode=loadImage("images/highwaycode.png");
  landslide=loadImage("images/landslide.png");
  nostoppingorstanding=loadImage("images/nostoppingorstanding.png");
  nouturn=loadImage("images/nouturn.png");
  oneway=loadImage("images/oneway.png");
  recycle=loadImage("images/recycle.png");
  righthandcurve=loadImage("images/righthandcurve.png");
  slipperyroad=loadImage("images/slipperyroad.png");
  slope=loadImage("images/slope.png");
  speedlimit=loadImage("images/speedlimit.png");
  stoping=loadImage("images/stop.png");
  warning=loadImage("images/warning.png");
  workinprogress=loadImage("images/workinprogress.png");
  
}

function setup() {
  createCanvas(800,400);
startbutton=createSprite(350,250,0,0);



gameStates="start";
}

function draw() {
  background("purple");
  drawSprites();

  if(gameStates==="start"){
    textSize(60);
    fill("gold");
    text("Welcome",250,100);
    startbutton.addImage("startbutton",start);
    
    
    
  }
  
  if(gameStates==="play"){
      var question="q1"
      if(question==="q1"){
         var bgcolor=createSprite(400,200,0,0);
        bgcolor.addImage("bgcolor",bg);
        bgcolor.scale=3;
        

        fill(139,0,0);
        textSize(32);
        text("which of the following is the sign of crossroad ?",100,80);

         var cross=createSprite(200,220,0,0);
        cross.addImage("cross",crossroad);
        cross.scale=0.5;

         var no=createSprite(600,230,0,0);
        no.addImage("no",nostoppingorstanding);
        
        if(mousePressedOver(no)){
            
            alert("Try Again");
        }
          
        if(mousePressedOver(cross)){
           
          question="q2";
          console.log(question)
      }

      }
      

      if(question==="q2"){
       
        var bgcolor2=createSprite(400,200,0,0);
        bgcolor2.addImage("bgcolor2",bg2);
        bgcolor2.scale=2.9;

        fill("blue");
        textSize(35);
        
        text("which of the following is the sign of no u turn  ?",70,100);
        

        var turn=createSprite(200,220,0,0);
        turn.addImage("turn",nouturn);
        turn.scale=0.3;

        var dead=createSprite(600,230,0,0);
        dead.addImage("dead",deadend);
        dead.scale=1.1;

        //if(mousePressedOver(dead)){
            alert("Try Again")
        //}

      }

      if(question==="q3"){
        
        var bgcolor3=createSprite(400,200,0,0);
        bgcolor3.addImage("bgcolor3",bg3);
        bgcolor3.scale=3;

        fill(54,54,54);
        textSize(30);
        text("which of the following is the sign of highwaycode ?",100,80);

        var highway=createSprite(200,220,0,0);
        highway.addImage("highway",highwaycode);
        highway.scale=1.2;

        var no=createSprite(600,230,0,0);
        no.addImage("no",nostoppingorstanding);
        no.scale=1.2;

        if(mousePressedOver(no)){
            
          alert("Try Again");
      }

      }

      if(question==="q4"){

        var bgcolor4=createSprite(400,200,0,0);
        bgcolor4.addImage("bgcolor4",b5)
        bgcolor4.scale=3.5;

        fill("red");
        textSize(32);
        text("which of the following is the sign of landslide ?",100,80);

        var so=createSprite(600,230,0,0);
        so.addImage("so",slope);
        so.scale=1.4;

        var land=createSprite(200,220,0,0);
        land.addImage("land",landslide);
        land.scale=1.45;
        
        //if(mousePressedOver(so)){

        //}

      }

      if(question==="q5"){

        var bgcolor5=createSprite(400,200,0,0);
        bgcolor5.addImage("bgcolor5",b6)
        bgcolor5.scale=3;

        fill(101,0,11);
        textSize(32);
        text("which of the following is the sign of right hand curve ?",43,80);

        var way=createSprite(600,230,0,0);
        way.addImage("way",oneway);
        way.scale=1.2;

        var curve=createSprite(200,220,0,0);
        curve.addImage("curve",righthandcurve);
        curve.scale=1.23;
        
        if(mousePressedOver(way)){
          alert("Try Again");
        }

      }

      if(question==="q6"){
        
        var bgcolor6=createSprite(400,200,0,0);
        bgcolor6.addImage("bgcolor6",b6);
        bgcolor6.scale=3;

        fill("blue");
        textSize(30);
        text("which of the following is the sign of speedlimit?",100,80);

        var road=createSprite(200,220,0,0);
        road.addImage("road",slipperyroad);
        road.scale=1.2;

        var limit=createSprite(600,230,0,0);
        limit.addImage("limit",speedlimit);
        limit.scale=1.2;
        
        if(mousePressedOver(road)){
          alert("Try Again");
        }
        

      }

      if(question==="q7"){
        
        var bgcolor7=createSprite(400,200,0,0);
        bgcolor7.addImage("bgcolor7",b7);
        bgcolor7.scale=9;

        fill("purple");
        textSize(30);
        text("which of the following is the sign of recycle?",100,80);

        var yes=createSprite(200,220,0,0);
        yes.addImage("yes",recycle);
        yes.scale=1.2;

        var way=createSprite(600,230,0,0);
        way.addImage("way",oneway);
        way.scale=1.2;

        if(mousePressedOver(way)){
            alert("Try Again");
        }

      }

      if(question==="q8"){
        
        var bgcolor8=createSprite(400,200,0,0);
        bgcolor8.addImage("bgcolor8",b8);
        bgcolor8.scale=3.3;

        fill("white");
        textSize(30);
        text("which of the following is the sign of stop?",100,80);

        var opo=createSprite(200,220,0,0);
        opo.addImage("opo",stoping);
        opo.scale=1.2;

        var ing=createSprite(600,230,0,0);
        ing.addImage("ing",warning);
        ing.scale=1.4;

        if(mousePressedOver(ing)){
          alert("Try Again");
        }

      }

      if(question==="q9"){
        
        var bgcolor9=createSprite(400,200,0,0);
        bgcolor9.addImage("bgcolor9",b9);
        bgcolor9.scale=3.3;

        fill(247, 101, 163);
        textSize(30);
        text("which of the following is the sign of warning ?",100,80);

        var so=createSprite(600,230,0,0);
        so.addImage("so",slope);
        so.scale=1.4;

        var ing=createSprite(200,220,0,0);
        ing.addImage("ing",warning);
        ing.scale=1.55;
        
        if(mousePressedOver(so)){
          alert("Try Again");
        }

      }

      if(question==="q10"){
        
        var bgcolor10=createSprite(400,200,0,0);
        bgcolor10.addImage("bgcolor10",b10);
        bgcolor10.scale=3;

        fill("blue");
        textSize(30);
        text("which of the following is the sign of deadend ?",100,80);

        var dead=createSprite(600,230,0,0);
        dead.addImage("dead",deadend);
        dead.scale=1.4;

        var progress=createSprite(200,220,0,0);
        progress.addImage("progress",workinprogress);
        progress.scale=0.43;
        
        if(mousePressedOver(progress)){
          alert("Try Again");
        }

      }

      if(question==="q11"){
        
        var bgcolor11=createSprite(400,200,0,0);
        bgcolor11.addImage("bgcolor11",b11);
        bgcolor11.scale=3;

        fill(64,29,121);
        textSize(30);
        text("which of the following is the sign of no stopping ?",100,80);

        var standing=createSprite(600,230,0,0);
        standing.addImage("standing",nostoppingorstanding);
        standing.scale=1.7;

        var progress=createSprite(200,220,0,0);
        progress.addImage("progress",workinprogress);
        progress.scale=0.43;
        
        if(mousePressedOver(progress)){
          alert("Try Again");
        }

      }

      if(question==="q12"){
        
        var bgcolor12=createSprite(400,200,0,0);
        bgcolor12.addImage("bgcolor12",b12);
        bgcolor12.scale=3;

        fill("blue");
        textSize(30);
        text("which of the following is the sign of slope ?",100,80);

        var dead=createSprite(200,220,0,0);
        dead.addImage("dead",deadend);
        dead.scale=1.4;

        var so=createSprite(600,230,0,0);
        so.addImage("so",slope);
        so.scale=1.4;
        
        if(mousePressedOver(dead)){
          alert("Try Again");
        }

      }

      if(question==="q13"){
        
        var bgcolor13=createSprite(400,200,0,0);
        bgcolor13.addImage("bgcolor13",b13);
        bgcolor13.scale=3;

        fill("gold");
        textSize(28);
        text("which of the following is the sign of work in progress ?",100,80);

        var way=createSprite(600,230,0,0);
        way.addImage("way",oneway);
        way.scale=1.2;

        var progress=createSprite(200,220,0,0);
        progress.addImage("progress",workinprogress);
        progress.scale=0.43;
        
        if(mousePressedOver(progress)){
          alert("Try Again");
        }

      }

      if(question==="q14"){
        
        var bgcolor14=createSprite(400,200,0,0);
        bgcolor14.addImage("bgcolor14",b14);
        bgcolor14.scale=3;

        fill(238,0,129);
        textSize(30);
        text("which of the following is the sign of oneway ?",100,80);

        var road=createSprite(200,220,0,0);
        road.addImage("road",slipperyroad);
        road.scale=1.2

        var way=createSprite(600,230,0,0);
        way.addImage("way",oneway);
        way.scale=1.2;
        
        if(mousePressedOver(progress)){
          alert("Try Again");
        }

      }

      if(question==="q15"){
        
        var bgcolor15=createSprite(400,200,0,0);
        bgcolor15.addImage("bgcolor15",b15);
        bgcolor15.scale=3;

        fill(115,181,4);
        textSize(30);
        text("which of the following is the sign of slippery road?",100,80);

        var dead=createSprite(600,230,0,0);
        dead.addImage("dead",deadend);
        dead.scale=1.4;

        var road=createSprite(200,220,0,0);
        road.addImage("road",slipperyroad);
        road.scale=1.2
        
        if(mousePressedOver(dead)){
          alert("Try Again");
        }

        if(mousePressedOver(road)){
          gameStates==="end"
        }
        
      }

  }

  if(gameStates==="end"){
    background("orange");
    textSize(80);
    fill("brown");
    text("well done",200,200)
    
    
    
    
      
  }



  if(mousePressedOver(startbutton)){
    gameStates="play";
  }

  

  
}