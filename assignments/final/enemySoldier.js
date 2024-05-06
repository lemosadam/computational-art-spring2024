class enemySoldier{
//obsolete code when i realized i could use the same class and just change the teamColor
    

    constructor(x, y, sizeX, sizeY, teamColor, hp, enemyCore){

   

        this.sprite = new Sprite();
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.width = sizeX;
        this.sprite.height = sizeY;
        this.sprite.color = teamColor;
        this.sprite.collider = 'dynamic';
        this.hp = hp;
  
        this.enemyCore = enemyCore;


    }

   update(){

    this.target = createVector(this.enemyCore.sprite.x, this.enemyCore.sprite.y)
    this.sprite.moveTowards(this.target, 0.001);

    // if(this.hp <= 0){
    //     alive = false;
    // }
    

    if (keyIsPressed === true){
        if (keyCode === BACKSPACE)
        {
            this.hp = this.hp-1;
        }
    }

    if (this.sprite.collides(this.enemyCore.sprite)) {
        this.hp = 0;
        this.enemyCore.hp = this.enemyCore.hp - 1;
    }
   }

 

}