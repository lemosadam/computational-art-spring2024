class HPDisplay{
    constructor(x, y, core){

        
        this.sprite = new Sprite();
        this.sprite.img = bannerIMG;
        this.sprite.x = x
        this.sprite.y = y + 50;
        this.core = core
        this.sprite.text = this.core.hp;
        this.sprite.textSize = 30;
        this.sprite.collider = 's'
    }

    draw(){
        this.sprite.text = this.core.hp +"/30"
    }
}