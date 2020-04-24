var player1;
var player2=[];
var obj;

function setup() {
  createCanvas(400, 400);
  frameRate(2);
  player1= new Superman();
  player2=new Darkseid();
  obj= new Misil();
  york=loadImage('york.jpg');
}

function draw() {
  background(york); 
  player1.mostrar();
  player1.rebotar1();
  player1.rebotar2();
  player1.rebotar3();
  player1.rebotar4();
  player2.mostrar();
  player2.rebotar1();
  player2.rebotar2();
  player2.rebotar3();
  player2.rebotar4();
  if (keyCode==37){
    player1.izquierda();
  }
  if (keyCode==39){
    player1.derecha();
  }
  if (keyCode==38){
    player1.arriba();
  }
  if (keyCode==40){
    player1.abajo();
  }
  if (keyCode==65){
    player2.izquierda();
  }
  if (keyCode==68){
    player2.derecha();
  }
  if (keyCode==87){
    player2.arriba();
  }
  if (keyCode==83){
    player2.abajo();
  }
  player2.detectar();
  obj.mostrar();
  obj.derecha();
  obj.rebotar1();
  obj.rebotar2();
  obj.rebotar3();
  obj.rebotar4();
  
  /*player1.derecha();
  player1.izquierda();
  
  player2.derecha();
  player2.izquierda();*/
}
