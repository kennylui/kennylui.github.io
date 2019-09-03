function newGame(){
  this.hp = 20;
  this.attack = 5;
  this.defense = 5;
  this.money = 0;
  document.write("Health: "+this.hp);
  document.write("<br>");
  document.write("Attack: "+this.attack);
  document.write("<br>");
  document.write("Defense: "+this.defense);
  document.write("<br>");
  document.write("Money: "+this.money);
  document.write("<br>");
  var button = document.createElement("button");
  button.innerHTML = "You Have Created New Game!";
}

function main(){
  //resetgame
  newGame();
}
