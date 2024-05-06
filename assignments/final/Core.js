class Core {

constructor(x, y, teamColor, size, spriteIMG){
    

  

  this.sprite = new Sprite();
  this.teamColor = teamColor;

  
  this.sprite.x = x;
  this.sprite.y = y;
  this.sprite.diameter = size;
  this.sprite.color = teamColor;
  this.sprite.collider = 'static';

  this.hp = 30;
  if (this.teamColor == "blue"){
    this.sprite.img = blueCastle;}
    else {this.sprite.img = redCastle}

  //this.sprite.scale = .5
}

update() {
  //this.sprite.debug = mouse.pressing();
  //console.log(this.hp)
 

  if (this.hp <= 0){
    if (this.teamColor == "blue"){
      textToDisplay = "You Lose!";
      currentState = state_4;}
      else {textToDisplay = "You Win!"
      currentState = state_4;}

  }

  
}

}