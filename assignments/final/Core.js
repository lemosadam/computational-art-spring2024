class Core {

constructor(x, y, teamColor, size, spriteName){
    
  this.teamColor = teamColor;
  this.x = x;
  this.y = y;
  this.size = size
  this.spriteName = spriteName;


  this.spriteName = new Sprite();
  this.spriteName.x = this.x;
  this.spriteName.y = this.y;
  this.spriteName.diameter = this.size;
  this.spriteName.color = this.teamColor;
  this.spriteName.collider = 'static';

  this.HP = 50;

}

show() {
    
    
    // push();

    
   
    // fill(this.teamColor, 100, 100)
    // ellipse(this.x, this.y, this.size);
 

    // pop();
}

}