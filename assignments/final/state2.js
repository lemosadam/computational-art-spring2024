//player spawn phase

class state2{
    constructor(){
        startOfPlayerTurn = true;
        spawnButton = createButton('Spawn Soldier (2gp)')
        spawnKnightButton = createButton('Spawn Knight (4gp)')
        endPlayerTurn = createButton('Finished Placing Soldiers')
        chooseLaneA = createButton('Spawn Here')
        chooseLaneB = createButton('Spawn Here')
        spawnButton.position(-100, -100)
        spawnKnightButton.position(-100, -100)
        endPlayerTurn.position(-100, -100)
        chooseLaneA.position(-100, -100)
        chooseLaneB.position(-100, -100)
    }

    draw(){
        //console.log(startOfPlayerTurn)
        if (startOfPlayerTurn == true){
            startOfPlayerTurn = false;
            this.startOfTurn()
        }

        push();
        background(0, 0, 100)

        for (let x = 0; x < width; x += grassTile.width) {
          for (let y = 0; y < height; y += grassTile.height) { 
              image(grassTile, x, y); 
          }
      }
      
    
      pop();
        
        // if (this.startOfPlayerTurn == true){
        //     this.startOfTurn();
        // }
        


        


    }

    startOfTurn(){
        textToDisplay = "Select a Lane"
        //spawnButton = createButton('Spawn Soldier')
        //spawnButton.position(width-50, height)
        spawnButton.mousePressed(this.spawnSoldier)
        spawnKnightButton.mousePressed(this.spawnKnight)

        //endPlayerTurn = createButton('Finished Placing Soldiers')
        endPlayerTurn.position(width/2, height - 50)
        endPlayerTurn.mousePressed(this.endTurn)

        //chooseLaneA = createButton('Spawn Here')
        chooseLaneA.position(width - 320, 160)
        chooseLaneA.mousePressed(this.setLaneA)

        //chooseLaneB = createButton('Spawn Here')
        chooseLaneB.position(width - 320, height - 160)
        chooseLaneB.mousePressed(this.setLaneB)
        this.startOfPlayerTurn = false;

        
    }

    endTurn(){
        spawnButton.position(-100, -100)
        spawnKnightButton.position(-100, -100)
        endPlayerTurn.position(-100, -100)
        chooseLaneA.position(-100, -100)
        chooseLaneB.position(-100, -100)
        currentState = state_3;
    }

    setLaneA(){
        textToDisplay = "Chosen Lane A"
        selectSample.play();
        chosenLane = createVector(width - 320, 160)
        spawnButton.position(width - 320, 160)
        spawnKnightButton.position(width - 320, 130)
        chooseLaneA.position(-100, -100)
        chooseLaneB.position(-100, -100)
    }

    setLaneB(){
        textToDisplay = "Chosen Lane B"
        selectSample.play();
        chosenLane = createVector(width - 320, height - 160)
        spawnButton.position(width - 320, height - 160)
        spawnKnightButton.position(width - 320, height - 190)
        chooseLaneA.position(-100, -100)
        chooseLaneB.position(-100, -100)
    }

    spawnSoldier() {
        playerUnits.push(new Soldier(chosenLane, 64, 64, "blue", 35, coresArray[1], enemyUnits, goldBags))
        select2Sample.play();
        chooseLaneA.position(width - 320, 160)
        chooseLaneB.position(width - 320, height - 160)
        spawnButton.position(-100, -100)
        spawnKnightButton.position(-100, -100)
        gold = gold - 2;
      }

      spawnKnight() {
        playerUnits.push(new Knight(chosenLane, 64, 64, "blue", 105, coresArray[1], enemyUnits, goldBags))
        select2Sample.play();
        chooseLaneA.position(width - 320, 160)
        chooseLaneB.position(width - 320, height - 160)
        spawnButton.position(-100, -100)
        spawnKnightButton.position(-100, -100)
        gold = gold - 4;
      }
}