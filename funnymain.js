function newGame(){
  this.hp = 20;
  this.attack = 5;
  this.defense = 5;
  this.money = 0;
  document.write("Health: "+this.hp);
  document.write("\n");
  document.write("Attack: "+this.attack);
  document.write("\n");
  document.write("Defense: "+this.defense);
  document.write("\n");
  document.write("Money: "+this.money);
}

function main(){
  newGame();
}
