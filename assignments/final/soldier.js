class Soldier{

    

    constructor(chosenLane, w, h, teamColor, hp, enemyCore, oppositeTeam){

   

        this.sprite = new Sprite();
      
        
        this.sprite.x = chosenLane.x;
        this.sprite.y = chosenLane.y;
        this.sprite.w = w;
        this.sprite.h = h;
        this.sprite.rotationLock = true;
        //this.sprite.scale 
        this.sprite.teamColor = teamColor;
        
        this.hp = hp;
        this.enemyUnits = oppositeTeam;
        this.enemyCore = enemyCore;
        if (this.sprite.teamColor == "blue"){
            this.sprite.img = pawnWalkGIF;}
            else {this.sprite.img = redWalkGIF}
        
          //this.sprite.scale = .5
        
        this.timeSinceLastCollision = 3;
        this.timeSinceLastSoundPlayed = 50
    }

   update(){
    //console.log(this.hp)
    this.timeSinceLastCollision++;
    this.timeSinceLastSoundPlayed++;
    if (this.timeSinceLastCollision > 5){
        if (this.sprite.teamColor == "blue"){
            this.sprite.img = pawnWalkGIF;}
            else {this.sprite.img = redWalkGIF}
    }

    //this.sprite.debug = mouse.pressing();
    this.target = createVector(this.enemyCore.sprite.x, this.enemyCore.sprite.y)
    this.sprite.moveTowards(this.target, 0.0025);
    //console.log(enemyUnits)

    

    if (keyIsPressed === true){
        if (keyCode === BACKSPACE)
        {
            this.hp = this.hp-1;
        }
     }

    if (this.sprite.collides(this.enemyCore.sprite)) {
        this.hp = 0;
        this.enemyCore.hp = this.enemyCore.hp - 1;
        if (this.sprite.teamColor == "red"){
            gold = gold - 1;
            deathSample.play();
        } else{
            powerUpSample.play();
        }
     }

     //got chatGPT help here with referencing the entire array of enemyUnits which helped me realize you could pass the entire array in via the constructor. was gettin an undefined error prior
     for (let units of this.enemyUnits) {
        if (this.sprite.collides(units.sprite)) {
            if(this.timeSinceLastSoundPlayed > 50)
            {hit2Sample.play()
            this.timeSinceLastSoundPlayed = 0}
            units.hp--
            console.log(units.hp)
            

          if (this.sprite.teamColor == "blue"){
            this.sprite.img = pawnAttackGIF;
            }
            else {
                
                this.sprite.img = redAttackGIF}
          
        }
     }

     

   }
}