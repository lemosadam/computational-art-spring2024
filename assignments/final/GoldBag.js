class GoldBag{
    constructor(goldSpawn, playerUnits, enemyUnits){
        this.sprite = new Sprite()
        this.sprite.x = goldSpawn.x;
        this.sprite.y = goldSpawn.y;
        this.sprite.diameter = 20;
        this.sprite.img = goldSackIMG;
        this.sprite.collider = 'static'
        this.playerUnits = playerUnits;
        this.enemyUnits = enemyUnits;
    }

    draw(){
        this.playerUnits = playerUnits;
        this.enemyUnits = enemyUnits;
        for (let units of this.playerUnits){
            if (this.sprite.collides(units.sprite))
            {
                coinSample.play();
                console.log("colidng")
                gold = gold +5;
                this.sprite.remove();
            }
        }

        for (let units of this.enemyUnits){
            if (this.sprite.collides(units.sprite))
            {
                console.log("colidng")

                this.sprite.remove();
            }
        }
       

    }
}