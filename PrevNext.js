function previous(){
  clearDisplay();
  if(0<current.monthposition<=11){
    current.monthposition--;
  }
  else
  {current.monthposition = 11;}
  Display(current.monthposition, current.year);
}

function next(){
  clearDisplay();
  if(0<=current.monthposition<11){
    current.monthposition++;
  }
  else
  {current.monthposition = 0;}
  
  Display(current.monthposition, current.year);
}

