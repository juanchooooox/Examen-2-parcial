class Misil{
  constructor(){
    //Posición del personaje
    this.x = width/2;
    this.y = random(height/2);
    this.dir = 0.1;
    //Velocidad del personaje
    this.velx = 10;
    //Imágenes
    this.vely=10;
    this.img = []; //Array
   
    this.frame = 0;
   
    for(var i = 0; i < 4; i++){
      this.img[i] = loadImage("laser_"+ i +".gif");
    }
  }
 
  mostrar(){
    push();
    translate(this.x, this.y);
    scale(this.dir, 0.1);
    imageMode(CENTER);
    image(this.img[this.frame], 0, 0);
    pop();
  }
 
  derecha(){
    this.frame++;
    this.x = this.x + this.velx;
    this.dir = 0.5;
    if(this.frame > 3){
      this.frame = 0;
    }
  }
 
  izquierda(){
    this.frame++;
    this.x = this.x - this.velx;
    this.dir = -0.5;
    if(this.frame > 3){
      this.frame = 0;
    }
  } 
  arriba(){
    this.frame++;
    this.y = this.y- this.vely;
    this.dir = -0.5;
    if(this.frame > 3){
      this.frame = 0;
    }
  }
  abajo(){
    this.frame++;
    this.y = this.y+ this.vely;
    this.dir = -0.5;
    if(this.frame > 3){
      this.frame = 0;
    }
  }
  rebotar1(){
  if(this.y>400){
  this.vely=-this.vely;
   }
  }
  
  rebotar2(){
  if(this.x>400){
  this.velx=-this.velx;
  }
  }
  
  rebotar3(){
  if(this.y<0){
  this.vely=-this.vely;
  }
  }
  
  rebotar4(){
  if(this.x<0){
  this.velx=-this.velx;
  }
  }
}
