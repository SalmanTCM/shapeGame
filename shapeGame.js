let x = 30 ;
let y = 30 ;
let goLeft = false;
let goLeftForY=false;
// let GoUp = false;
function setup() {
  createCanvas(700, 500);
  
}

function draw() {
  background("rgb(255,255,255)");
  fill(0,32,69);
  square(x,y,50,0,);
  // rect(x,y,10,100);
  rect(690,mouseY,10,100);
  rect(1,mouseY,10,100);
  
  
if (goLeft == false)
  {
  x= x+5 
  }
  if (goLeft == true)
  {
  x= x-5 
  }
  if (x>650)
  {
  goLeft=true; 
  }
  if (x<0)
  {
  goLeft=false; 
  }
 if (goLeftForY==false) 
   {
     y=y+1
   }
  if (goLeftForY == true)
  {
  y= y-1 
  }
   if (y>450)
  {
  goLeftForY=true; 
  }
  if (y<0)
  {
  goLeftForY=false; 
  }
  if (x>650){
    const e = new Error('try again');
    throw e;
  }
}

