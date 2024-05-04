class Soldier{

    constructor(x, y, sizeX, sizeY, teamColor, sprite){

   

        this.sprite = new Sprite();
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.sizeX = sizeX;
        this.sprite.sizeY = sizeY;
        this.sprite.color = teamColor;
        this.sprite.collider = 'dynamic';



    }

   update(){

    this.sprite.moveTowards(mouse, 0.07);
   }

}