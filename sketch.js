var cha;
var cha1,cha2,cha3,cha4;
var cham1,cham2,cham3,cham4;
var left,right,up,down;
var grass;
var grassimg1,grassimg2,grassimg3,grassimg4,grassimg5;
var tree1;
var tree;
var treeG,fenceGV;
var edgeBG,edgeTG,edgeLG;
var edgeBimg,edgeTimg,edgeLimg;
var theme;
var c1,c2,c3,c4;
var c1i,c2i,c3i,c4i;
var decimg1,decimg2;
function preload(){
cha1 = loadAnimation("assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still12.png","assets/ch/still13.png","assets/ch/still12.png")
cha2 = loadAnimation("assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still22.png","assets/ch/still23.png","assets/ch/still22.png")
cha3 = loadAnimation("assets/ch/still31.png")
cha4 = loadAnimation("assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still42.png","assets/ch/still43.png","assets/ch/still42.png")
cham1 = loadAnimation("assets/ch/run11.png","assets/ch/run12.png","assets/ch/run13.png","assets/ch/run14.png","assets/ch/run15.png","assets/ch/run16.png","assets/ch/run17.png","assets/ch/run18.png","assets/ch/run19.png","assets/ch/run110.png",);
cham2 = loadAnimation("assets/ch/run21.png","assets/ch/run22.png","assets/ch/run23.png","assets/ch/run24.png","assets/ch/run25.png","assets/ch/run26.png","assets/ch/run27.png","assets/ch/run28.png","assets/ch/run29.png","assets/ch/run210.png",);
cham3 = loadAnimation("assets/ch/run31.png","assets/ch/run32.png","assets/ch/run33.png","assets/ch/run34.png","assets/ch/run35.png","assets/ch/run36.png","assets/ch/run37.png","assets/ch/run38.png","assets/ch/run39.png","assets/ch/run310.png",);
cham4 = loadAnimation("assets/ch/run41.png","assets/ch/run42.png","assets/ch/run43.png","assets/ch/run44.png","assets/ch/run45.png","assets/ch/run46.png","assets/ch/run47.png","assets/ch/run48.png","assets/ch/run49.png","assets/ch/run410.png",);
grassimg1 = loadImage("assets/tile set/ground/grass11.png");
grassimg2 = loadImage("assets/tile set/ground/grass12.png");
grassimg3 = loadImage("assets/tile set/ground/grass13.png");
grassimg4 = loadImage("assets/tile set/ground/grass14.png");
grassimg5 = loadImage("assets/tile set/ground/grass15.png");
tree1 = loadImage("assets/tree/2.png");
fenceVimg = loadImage("assets/fence/4.png");
edgeBimg = loadImage("assets/tile set/water cliff/tile (12).png");
edgeTimg = loadImage("assets/tile set/water cliff/tile (2).png");
edgeLimg = loadImage("assets/tile set/water cliff/tile (6).png");
edgeRimg = loadImage("assets/tile set/water cliff/tile (8).png");
theme = loadSound("assets/theme.mp3");
c1i = loadImage("assets/tile set/water cliff/tile (1).png");
c2i = loadImage("assets/tile set/water cliff/tile (3).png");
c3i = loadImage("assets/tile set/water cliff/tile (11).png");
c4i = loadImage("assets/tile set/water cliff/tile (13).png");
decimg1 = loadImage("assets/w/1.png");
decimg2 = loadImage("assets/w/2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  treeG = new Group();
  fenceGV = new Group();
  edgeBG = new Group();
  edgeTG = new Group();
  edgeLG = new Group();
  edgeRG = new Group();
  makeWdec(20,-400,-48,-400,height+400);
  makeWdec(20,width+400,width+60,-400,height+400);
  makeWdec(20,0,width+10,height+130,height+400);
  makeWdec(20,0,width+10,height-700,height-1100);
  edgeT(29,20,20-48);
  nonespr(29,20,20);
  nonespr(29,20,68);
  nonespr(29,20,68+48);
  nonespr(29,20,68+48+48);
  nonespr(29,20,68+48+48+48);
  nonespr(29,20,68+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48+48+48);
  edgeB(29,20,68+48+48+48+48+48+48+48+48+48+48+48+48+48);
  edgeL(14,20-48,20);
  edgeR(14,48*29+20,20);
  c1 = createSprite(20-48,20-48);
  c1.addImage(c1i);
  //c1.debug = true;
  c1.setCollider("circle",8,8,15);
  c2 = createSprite(48*29+20,20-48);
  c2.addImage(c2i);
  //c2.debug = true;
  c2.setCollider("circle",-6,8,15);
  c3 = createSprite(20-48,68+48+48+48+48+48+48+48+48+48+48+48+48+48);
  c3.addImage(c3i);
  //c3.debug = true;
  c3.setCollider("circle",8,-4,15);
  c4 = createSprite(48*29+20,68+48+48+48+48+48+48+48+48+48+48+48+48+48);
  c4.addImage(c4i);
  //c4.debug = true;
  c4.setCollider("circle",-6,-6,15);
  cha = createSprite(width/2, height/2, 50, 50);
  cha.addAnimation("move1",cham1);
  cha.addAnimation("still1",cha1);
  cha.addAnimation("move2",cham2);
  cha.addAnimation("still2",cha2);
  cha.addAnimation("move3",cham3);
  cha.addAnimation("still3",cha3);
  cha.addAnimation("move4",cham4);
  cha.addAnimation("still4",cha4);
  cha.changeAnimation("still1");
  cha.scale = 0.4;
  trees(1,600,200,tree1);
  left = 0;
  right = 0;
  up = 0;
  down = 0;
  cha.setCollider("rectangle",0,50,60,40)
  //theme.loop();
  //cha.debug = true;
}

function draw() {
  background("#71deef");  
  camera.position.y = cha.position.y;
  camera.position.x = cha.position.x;
  if(keyIsDown(DOWN_ARROW)){
    cha.changeAnimation("move1");
    cha.position.y += 5;
    down = 1;
    left = 0;
    right = 0;
    up = 0;
  }
  if(keyIsDown(LEFT_ARROW)){
    cha.changeAnimation("move2");
    cha.position.x -= 5;
    left = 1;
    right = 0;
    up = 0;
    down = 0;
  }
  if(keyIsDown(UP_ARROW)){
    cha.changeAnimation("move3");
    cha.position.y -= 5;
    left = 0;
    right = 0;
    up = 1;
    down = 0;
  }
  if(keyIsDown(RIGHT_ARROW)){
    cha.changeAnimation("move4");
    cha.position.x += 5;
    left = 0;
    right = 1;
    up = 0;
    down = 0;
  }
  if(!keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && !keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)){
    if(down == 1){
      cha.changeAnimation("still1");
    }
    if(left == 1){
      cha.changeAnimation("still2");
    }
    if(up == 1){
      cha.changeAnimation("still3");
    }
    if(right == 1){
      cha.changeAnimation("still4");
    }
  } 
  cha.collide(treeG);
  cha.collide(fenceGV);
  cha.collide(edgeBG);
  cha.collide(edgeTG);
  cha.collide(edgeLG);
  cha.collide(edgeRG);
  cha.collide(c1);
  cha.collide(c2);
  cha.collide(c3);
  cha.collide(c4);
  drawSprites();
}

function nonespr(n,x,y) {
  for(var c=0; c<n; c++)
  {
    var grass = createSprite(x+48*c,y,50, 25);
    var rand = Math.round(random(1,5));
    switch (rand){
      case 1: grass.addImage(grassimg1);
      break;
      case 2: grass.addImage(grassimg2);
      break;
      case 3: grass.addImage(grassimg3);
      break;
      case 4: grass.addImage(grassimg4);
      break;
      case 5: grass.addImage(grassimg5);
      break;
  }
  }
}
function trees(n,x,y,img){
  for(var c=0; c<n; c++){
    var tree;
   tree = createSprite(x+48*c,y,50, 25);
    tree.addImage(img);
    tree.setCollider("rectangle",7,49,40,25);
    treeG.add(tree);
  }
  //tree.debug = true;
}
function fencesV(n,x,y){
  for(var c=0; c<n; c++){
    var fenceV;
    fenceV = createSprite(x,y+48*c,50, 25);
    fenceV.addImage(fenceVimg);
    fenceV.setCollider("rectangle",0,0,20,50);
    fenceGV.add(fenceV);
  }
  //fenceV.debug = true;
}

function edgeB(n,x,y){
  for(var c=0; c<n; c++)
  {
    var edgeB = createSprite(x+48*c,y,50, 25);
    edgeB.addImage(edgeBimg);
    //edgeB.debug = true;
    edgeB.setCollider("rectangle",0,15,50,60);
    edgeBG.add(edgeB);
  }
}
function edgeT(n,x,y){
  for(var c=0; c<n; c++)
  {
    var edgeT = createSprite(x+48*c,y,50, 25);
    edgeT.addImage(edgeTimg);
    //edgeT.debug = true;
    edgeT.setCollider("rectangle",0,-15,50,40);
    edgeTG.add(edgeT);
  }
}
function edgeL(n,x,y){
  for(var c=0; c<n; c++){
    var edgeL;
    edgeL = createSprite(x,y+48*c,50, 25);
    edgeL.addImage(edgeLimg);
    //edgeL.debug = true;
    edgeL.setCollider("rectangle",-15,0,50,50);
    edgeLG.add(edgeL);
  }
}
function edgeR(n,x,y){
  for(var c=0; c<n; c++){
    var edgeR;
    edgeR = createSprite(x,y+48*c,50, 25);
    edgeR.addImage(edgeRimg);
    //edgeR.debug = true;
    edgeR.setCollider("rectangle",15,0,50,50);
    edgeRG.add(edgeR);
  }
}
function makeWdec(n,w1,w2,h1,h2){
  for(var i=0; i<=n; i++)
  {
    var dec = createSprite(random(w1,w2),random(h1,h2));
    var rand = Math.round(random(1,2));
    switch (rand){
      case 1: dec.addImage(decimg1);
      break;
      case 2: dec.addImage(decimg2);
      break;
  }
  }
}