function prev(){
  clearDisplay();
  Display();
}

function next(){
  clearDisplay();
  current.monthposition++;
  Display(current.monthposition, current.year);
}
