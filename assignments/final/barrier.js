class Barrier{

    constructor(x, y){

        
        this.sprite = new Sprite();
        this.sprite.x = x;
        this.sprite.y= y;
        this.sprite.img = barrierIMG;
        this.sprite.collider = 'static'

    }
}