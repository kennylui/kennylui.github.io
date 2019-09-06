function previous(){
  clearDisplay();
  Display();
}

function next(){
  clearDisplay();
  if(0<current.position<11){
    current.monthposition++;
  }
  else if(current.position == 11){
    current.monthposition = 0;
  }
  else{}
  Display(current.monthposition, current.year);
}
