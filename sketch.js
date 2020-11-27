
var game, player, form, database; 
var canvas, playerCountRef, playerCount = 0;
var allPlayers, playerInfoRef;
var gameState = 0;
var player1, player2;
var gameCode;
var bg_music;
// link for zombie death sound => https://www.youtube.com/watch?v=KJnX8RTMKXA 
// link for difficult game music (hp theme song) => https://www.youtube.com/watch?v=Htaj3o3JD8I
var musicRef = false;
var walls;
var wall1, wall2,maze;
var wall3,wall4;
var wall5,wall6,wall7;
var wall8,wall9,wall10,wall1,wall12,wall13,wall14;
var wall15,wall16,wall17;
var wall18,wall19,wall20;
var wall21, wall22, wall23, wall24;
var wall25, wall26, wall27, wall28, wall29, wall30, wall31;
var imageDisplay;
var zombies;
var players;
var bullets;
var option1, option2, option6, option3, option4, option5;
var on_entry, gunshot;
var bg;
var rand;
var person1, person2,person3, person4,person5,person6;
var zombie1, zombie2, zombie3, zombie4;
var selection;
var playera1,playera2,playera3,playera4,playera5,playera6;
var player1,player2;
var selState;
var code;
var verify = false;
var b = 0;
var ext;
var playRef;
var vRef;
var collision1,collision2;
var zombie;
var direction;
var bullet_img;
var bullets2;
var aimState;
var healths;
var door1,door2 ;
var health;
var zombie_death;
var crown, crown_img;
// spooky bg music => https://www.youtube.com/watch?v=70HCGgKog_U

function preload(){
bg = loadImage("../images/bg.jpg");
zombie1 = loadImage("../images/zombie1.png");
zombie2 = loadImage("../images/zombie2.png");
zombie3 = loadImage("../images/zombie3.png");
zombie4 = loadImage("../images/zombie4.png");
person1 = loadImage("../images/person1.jpg");
person2 = loadImage("../images/person2.jpg");
person3 = loadImage("../images/person3.jpg");
person4 = loadImage("../images/person4.jpg");
person5 = loadImage("../images/person5.jpg");
person6 = loadImage("../images/person6.jpg");
playera1 = loadImage("../images/PLAYER1.png"); 
playera2 = loadImage("../images/PLAYER2.png"); 
playera3 = loadImage("../images/PLAYER3.png"); 
playera4 = loadImage("../images/PLAYER4.png"); 
playera5 = loadImage("../images/PLAYER5.png"); 
playera6 = loadImage("../images/PLAYER6.png"); 
bullet_img = loadImage("../images/bullet.png");
on_entry = loadSound("../Sounds/ON-ENTRY.mp3");
gunshot = loadSound("../Sounds/gunshot.mp3");
zombie_death = loadSound("../Sounds/zombie_death.mp3");
crown_img = loadImage("../images/crown.png");
bg_music = loadSound("../Sounds/bg_music.mp3");
}
function setup(){
database = firebase.database();
canvas = createCanvas(displayWidth,displayHeight);
bullets1 = [];
bullets2 = [];
on_entry.play();
aimState = false;
var bullet;
zombies = [];
collision1 = false;
collision2 = false;
healths = [];
direction = "right";
vRef = 0;
code = char(random(65,90))+char(random(97,122))+char(random(48,57))+ char(random(48,57))+char(random(97,122)) +char(random(65,90));
selection = 0;
game = new Game();
game.getState();
game.start();
player.getCount();
 selState = 0;
 crown = createSprite(1150,1340);
 crown.addImage("corwn",crown_img);
 crown.scale = 0.4;
 door1 = createSprite(850,1095,300,10);
 door1.shapeColor = "brown";
 door2 = createSprite(1505,1450,10,300);
 door2.shapeColor = "brown";
wall1 = createSprite(150,1200,100,2200);
wall1.shapeColor = rgb(169,208,142);
//zombie = createSprite(1200,2300,50,50);
 wall2 = createSprite(600,150,1000,100);
 wall2.shapeColor = rgb(169,208,142);
 wall3 = createSprite(2250,1200,100,2200);
 wall3.shapeColor = rgb(169,208,142);
 wall4 = createSprite(750,350,100,300);
 wall4.shapeColor = rgb(169,208,142);
 imageDisplay = false;
 wall5 = createSprite(1650,400,100,600);
 wall5.shapeColor = rgb(169,208,142);
wall6 = createSprite(1200,750,1600,100);
wall6.shapeColor = rgb(169,208,142);
wall7 = createSprite(450,550,100,300);
wall7.shapeColor =rgb(169,208,142);
wall8 = createSprite(2050,450,300,100);
wall8.shapeColor = rgb(169,208,142);
wall9 = createSprite(1350,450,500,100);
wall9.shapeColor = rgb(169,208,142);
wall10 = createSprite(1050,950,100,300);
wall10.shapeColor = rgb(169,208,142);
wall11 = createSprite(1250,1050,500,100);
wall11.shapeColor = rgb(169,208,142);
wall12 = createSprite(1250,1250,100,300);
wall12.shapeColor = rgb(169,208,142);
wall13 = createSprite(350,1050,300,100);
wall13.shapeColor = rgb(169,208,142);
wall14 = createSprite(450,1300,100,600);
wall14.shapeColor = rgb(169,208,142);
wall15 = createSprite(650,2250,900,100);
wall15.shapeColor = rgb(169,208,142);
wall16 = createSprite(1750,2250,900,100);
wall16.shapeColor = rgb(169,208,142);
wall17 = createSprite(1050,2050,100,300);
wall17.shapeColor = rgb(169,208,142);
wall18 = createSprite(1350,2050,100,300);
wall18.shapeColor = rgb(169,208,142);
wall19 = createSprite(700,1950,600,100);
wall19.shapeColor = rgb(169,208,142);
wall20 = createSprite(750,1750,100,300);
wall20.shapeColor = rgb(169,208,142);
wall21 = createSprite(1700,1950,600,100);
wall21.shapeColor = rgb(169,208,142);
wall22 = createSprite(1450,1650,900,100);
wall22.shapeColor = rgb(169,208,142);
wall23 = createSprite(1050,1450,100,300);
wall23.shapeColor = rgb(169,208,142);
wall24 = createSprite(850,1350,300,100);
wall24.shapeColor = rgb(169,208,142);
wall25 = createSprite(750,1250,100,300);
wall25.shapeColor = rgb(169,208,142);
wall26 = createSprite(1400,1350,200,100);
wall26.shapeColor = rgb(169,208,142);
wall27 = createSprite(2050,450,300,100);
wall27.shapeColor = rgb(169,208,142);
wall28 = createSprite(2050,1050,300,100);
wall28.shapeColor = rgb(169,208,142);
wall29 = createSprite(2050,1350,300,100);
wall29.shapeColor = rgb(169,208,142);
//wall30 = createSprite(1850,1500,100,400);
//wall30.shapeColor = rgb(169,208,142);
wall30 = createSprite(1800,150,1000,100);
wall30.shapeColor = rgb(169,208,142);
walls = [wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30];
/*zombie.velocityX = 8;
zombie.velocityY = -6;
camera.position.x = zombie.x;
camera.position.y = zombie.y;*/


}
function draw(){
background(bg); 

if(gameState===0){
    if(option1!==undefined){
        option1.display();
    }
    if(option2!==undefined){
        option2.display();
    }
    if(option3!==undefined){
        option3.display();
    }
    if(option4!==undefined){
        option4.display();
    }
    if(option5!==undefined){
        option5.display();
    }
    if(option6!==undefined){
        option6.display();
    }
    if(selState===0){
        if(option1!==undefined){
            if(mousePressedOver(option1)){
                    selection = 1;
                    option1.scale = 1.5;
                    selState = 1;
                    player.selection = selection;
                } 
                }
                
                if(option2!==undefined){
                    if(mousePressedOver(option2)){
                            selection = 2;
                            option2.scale = 1.5;
                            selState = 1;
                            player.selection = selection;
                        } 
                        }
                if(option3!==undefined){
                    if(mousePressedOver(option3)){
                            selection = 3;
                            option3.scale = 1.5;
                            selState = 1;
                            player.selection = selection;
                    } 
                }
                if(option4!==undefined){
                    if(mousePressedOver(option4)){
                        selection = 4;
                        option4.scale = 1.5;
                        selState = 1;
                        player.selection = selection;
                    } 
                }
                if(option5!==undefined){
                    if(mousePressedOver(option5)){
                        selection = 5;
                        option5.scale = 1.5;
                        selState = 1;
                        player.selection = selection;
                    } 
                }
                if(option6!==undefined){
                    if(mousePressedOver(option6)){
                        selection = 6;
                        option6.scale  = 1.5;
                        selState = 1;
                        player.selection = selection;
                    }  
                }
    }
   
    
    
    
    
    
}
if(gameState===0){
   console.log(player.selection);
    b = b+60;
   
        switch(b){
            case 3600 : ext = ".";
             break;
             case 7200 : ext = "..";
             break;
             case 10800 : ext = "...";
             break;
             default : break;
        }
       
        if(b>10800){
            b=0;
        }
        textSize(25)
        fill("red");
        
        if(playRef!== undefined){
            text(playRef,displayWidth/2,displayWidth/4 + 200);
            text("Please Wait"+ ext,displayWidth/2,displayHeight/4 + 100);
        }
        
}
if(playerCount === 2){
    
    game.updateState(1);
}
if(gameState===1){
    clear();
    if(musicRef===false){
        bg_music.play();
        musicRef = true;
    }
   
   console.log("x "+mouseX);
   console.log("y "+mouseY);
    game.play();
    
 if(keyWentDown("a")){
      aimState = true;
 }
 if(keyWentDown("b")){
    aimState = false;
}
   if(keyWentDown(UP_ARROW) && aimState === true){
       direction = "up";

   }
   if(keyWentDown(RIGHT_ARROW) && aimState === true){
    direction = "right";
    
} 
if(keyWentDown(LEFT_ARROW) && aimState === true){
    direction = "left";
    
}
if(keyWentDown(DOWN_ARROW)&& aimState === true){
    direction = "down";
    
}
    
  
 if(keyWentDown("space")){
     gunshot.play();
     shoot();
 }
 for(var a = 0; a < zombies.length;a++){

     if(zombies[a].isTouching(player1)&&player.index === 1){
        healths[a] = 0;
        zombies[a].destroy();
         player.health-=200;
         player.update();
     }
     if(zombies[a].isTouching(player2)&&player.index === 2){
        healths[a] = 0;
        zombies[a].destroy();
        player.health-=200;
        player.update();
    }
 }
 if(player.health === 0 && player.index === 1){
         player1.destroy();
         text("you have lost",displayWidth/2-500,displayHeight/2-10);
 }
 if(player.health === 0 && player.index === 2){
    player2.destroy();
    text("you have lost",displayWidth/2-500,displayHeight/2-10);
}
if(allPlayers!==undefined){
    if(allPlayers.player1.health === 0 && allPlayers.player2.health === 0){
        game.update(2);
        game.end();
    }
}
 for(var h = 0; h<bullets2.length; h++){
    for(var t = 0; t < zombies.length; t++){
        for(var l = 0;l< walls.length;l++){
            if(bullets2[h].isTouching(walls[l])){
                bullets2[h].destroy();
            }
        }
            if(bullets2[h].isTouching(zombies[t])){
               healths[t] -=50;
                bullets2[h].destroy();
                if(healths[t]===0){
                    zombies[t].destroy();
                    zombie_death.play();
                    player.score++;
                    player.update();
                }
            }
    }
}
for(var h = 0; h<bullets1.length; h++){
    for(var t = 0; t < zombies.length; t++){
        for(var l = 0;l< walls.length;l++){
            if(bullets1[h].isTouching(walls[l])){
                bullets1[h].destroy();
            }
        }
            if(bullets1[h].isTouching(zombies[t])){
                healths[t] -=50;
                bullets1[h].destroy();
                if(healths[t]===0){
                    zombies[t].destroy();
                    zombie_death.play(); 
                    player.score++;
                    player.update();
                }
            }
    }
}  
      
drawSprites();
if(allPlayers!==undefined){
    if(player.index===1){
        strokeWeight(5);
        stroke("red");
        fill("white");
        text(allPlayers.player1.name + ":" +allPlayers.player1.score, allPlayers.player1.x - 200,allPlayers.player1.y - 200 );
        text(allPlayers.player2.name + ":" +allPlayers.player2.score, allPlayers.player1.x - 200,allPlayers.player1.y - 150 ); 
    }
    if(player.index===2){
        strokeWeight(5);
        stroke("red");
        fill("white");
        text(allPlayers.player1.name + ":" +allPlayers.player1.score, allPlayers.player2.x - 200,allPlayers.player2.y - 200 );
        text(allPlayers.player2.name + ":" +allPlayers.player2.score, allPlayers.player2.x - 200,allPlayers.player2.y - 150 );
    }       
}
for(var a = 0;a<walls.length;a++){
    text(a+1,walls[a].x,walls[a].y);
}

  /* 
  to be completed
    noFill();
    strokeWeight(5);
    stroke("black");
    rect(player1.x-50,player.y-100,100,10);
    fill("green");
    noStroke();
    rect(player1.x) 
*/



push();
translate(player.x-300,player.y-300);
noFill();
strokeWeight(10);
stroke("blue");
ellipse(0,0,50,50);
stroke("red");
if(direction==="right"){
    line(0,0,45,0);
}
if(direction==="left"){
    line(0,0,-45,0);
}
if(direction==="down"){
    line(0,0,0,45);
}
if(direction==="up"){
    line(0,0,0,-45);
}
pop();

    

}
function shoot(){
    if(player.index===1){
        bullet = createSprite(player1.x,player1.y);
        bullet.addImage("bullet",bullet_img);
        bullet.scale = 0.2;
        bullet.lifetime = 300;
        if(direction === "right"){
            bullet.rotation = 180;
            bullet.velocityX = 6;
            bullet.velocityY = 0;
        }
        if(direction === "left"){
            bullet.rotation = 0;
            bullet.velocityX = -6;
            bullet.velocityY = 0;
        }
        if(direction === "up"){
            bullet.rotation = 90;
            bullet.velocityX = 0;
            bullet.velocityY = -6;
        }
        if(direction === "down"){
            bullet.rotation = 270;
            bullet.velocityX = 0;
            bullet.velocityY = 6;
        }
        bullets1.push(bullet);
        
    }
    if(player.index===2){
        bullet = createSprite(player2.x,player2.y);
        bullet.addImage("bullet",bullet_img);
        bullet.scale = 0.2;
        bullet.lifetime = 300;
        if(direction === "right"){
            bullet.rotation = 180;
            bullet.velocityX = 6;
            bullet.velocityY = 0;
        }
        if(direction === "left"){
            bullet.rotation = 0;
            bullet.velocityX = -6;
            bullet.velocityY = 0;
        }
        if(direction === "up"){
            bullet.rotation = 90;
            bullet.velocityX = 0;
            bullet.velocityY = -6;
        }
        if(direction === "down"){
            bullet.rotation = 270;
            bullet.velocityX = 0;
            bullet.velocityY = 6;
        }
        bullets2.push(bullet);
        
    }
    
}