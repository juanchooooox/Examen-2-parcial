class Darkseid{
  constructor(){
    //Posición del personaje
    this.x = 300;
    this.y = random(height/2);
    this.dir = 1.0;
    //Velocidad del personaje
    this.velx = 10;
    //Imágenes
    this.vely=10;
    this.img = []; //Array
   
    this.frame = 0;
   
    for(var i = 0; i < 12; i++){
      this.img[i] = loadImage("DARKSEID_"+ i +".gif");
    }
  }
 
  mostrar(){
    push();
    translate(this.x, this.y);
    scale(this.dir, 1.0);
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
    detectar(){
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d<25){
      print("me revienta y yo tambien lo reviento");
      return true;
    }else{
      return false;
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
