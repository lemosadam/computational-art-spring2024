
class state1{
    constructor(){

        round = 0;
        this.startOfTurn = true;
        this.turnTimer = 0;
        this.unitsSpawned = false;
        
    }

    draw(){
        textToDisplay = "Enemy Phase"
        
        push();
        background(0, 0, 100)
        
        for (let x = 0; x < width; x += grassTile.width) { 
          for (let y = 0; y < height; y += grassTile.height) { 
              image(grassTile, x, y); // 
          }
      }
        //rectMode(CENTER)
        //textToDisplay = "Enemy Phase"
        //textSize(100)
        // topBanner.sprite.text = text(textToDisplay, width/2, 100);

       
        pop();
        
        if(this.startOfTurn == true){
            round++;
            if(round % 5 == 0){
                gold = gold + round*2;
                textToDisplay = "5 rounds passed! 5GP!"
            }
            this.turnTimer = 0;
            
            this.unitsSpawned = false;
            this.startOfTurn = false;
        }
        this.turnTimer++;
        //console.log(this.turnTimer)

     
        //console.log(round)
        if(this.unitsSpawned == false){
            
            this.spawnUnits();
            
        }
        //this.startofRound = true;

        

        if(this.unitsSpawned == true && this.turnTimer == 100){
            this.endTurn();
        }

        // let spawnEnemyButton = createButton('Spawn Enemy Soldier')
        // spawnEnemyButton.position(0, height)
        // spawnEnemyButton.mousePressed(spawnEnemySoldier)
        
    }

    spawnUnits(){
        for(let i = 0; i < random(round-1, round); i++){

        this.spawnGold()
          let laneChoice = random([1,2]);
          

            if (laneChoice == 1){
                chosenLane = enemySpawn1;
            }
            else{
                chosenLane = enemySpawn2}

            let unitChoice = random([1,2,3,4,5])

            if (unitChoice == 1){
                enemyUnits.push(new Knight(chosenLane, 64, 64, "red", 100, coresArray[0], playerUnits))
            }else{
                enemyUnits.push(new Soldier(chosenLane, 64, 64, "red", 30, coresArray[0], playerUnits))
            }
            
            
        }
        this.unitsSpawned = true;
        
    }

    spawnGold(){
        let goldChance = random([1, 2, 3, 4])
        if (goldChance == 1){
            let laneChoice = random([1,2]);
          

            if (laneChoice == 1){
                goldSpawn = createVector(random(320, 960), 200);
            }
            else{
                goldSpawn = createVector(random(320, 960), height-200)}
            goldBags.push(new GoldBag(goldSpawn, playerUnits, enemyUnits))
        }
    }

    endTurn(){
        this.startOfTurn = true;
        startOfPlayerTurn = true;
        this.turnTimer = 0;
        this.unitsSpawned = false;
        currentState = state_2;

        
    }
}