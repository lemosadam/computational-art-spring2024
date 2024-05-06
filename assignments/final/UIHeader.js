class UIHeader{
constructor(x, y){

    
    this.sprite = new Sprite();
    this.sprite.x = x;
    this.sprite.y = y;
    this.sprite.scale = 2
    this.sprite.img = bannerIMG;
    this.sprite.collider = 'n';
    this.sprite.text = "Text"
    this.sprite.textSize = 75;
    
}

draw(){

    this.sprite.text = textToDisplay;
    //console.log(textToDisplay)
}

}