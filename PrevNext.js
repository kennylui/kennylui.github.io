function prev(){
  clearDisplay();
  currentMonth = currentMonth--;
  initialDisplay();
}

function next(){
  clearDisplay();
  currentMonth = currentMonth++;
  initialDisplay();
}
