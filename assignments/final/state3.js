//combat phase

class state3{
    constructor(particles){

      this.particlesArray = particles;
    }

    draw() {
        //console.log(particles)
        textToDisplay = "Combat!"
        push();
        //background(0, 0, 100)

      //   ellipse(width/2, height/2, 100)
      //   for (let x = 0; x < width; x += grassTile.width) { 
      //     for (let y = 0; y < height; y += grassTile.height) { 
      //         image(grassTile, x, y); 
      //     }
      // }
      
      pop();
      ellipse(width/2, height/2, 100)
  
        if (enemyUnits.length == 0 && playerUnits.length == 0 && particles.length == 0){
            currentState = state_1;
        }

      
      
        for (let cores of coresArray){
          cores.update();
        }
      
        for (let playerUnit of playerUnits){
          playerUnit.update();
        }
        for (let enemyUnit of enemyUnits){
          enemyUnit.update();
        }
        //consulted chatGPT here which advised me to check the array backwards to prevent errors when splicing because I couldn't get them to remove properly
        for (let i = playerUnits.length - 1; i >= 0; i--) {
          let playerUnit = playerUnits[i];
        
          if (playerUnit.hp <= 0) {
            for(let j = 0; j<50; j++){
                console.log("creating particles")
                this.particlesArray.push(new Particle(playerUnit.sprite.x, playerUnit.sprite.y, playerUnit.sprite.teamColor));
            }
            playerUnit.sprite.remove();
            playerUnits.splice(i, 1);
          } 
        }
      
        for (let i = enemyUnits.length - 1; i >= 0; i--) {
         let enemyUnit = enemyUnits[i];
        
          if (enemyUnit.hp <= 0) {
            if (enemyUnit instanceof Knight){
                gold = gold+4
            } else{
                gold++;
            }
            for(let j = 0; j<50; j++){
                
                this.particlesArray.push(new Particle(enemyUnit.sprite.x, enemyUnit.sprite.y, enemyUnit.sprite.teamColor));
                console.log(particles)
            }
            enemyUnit.sprite.remove();
            enemyUnits.splice(i, 1);
          } 
        }

        for (let particle of this.particlesArray){
          particle.update();
          particle.draw();
          
          //ellipse(particle.pos.x, particle.pos.y, 10)
          //console.log("drawing particles")
        }

          for (let p = this.particlesArray.length - 1; p >= 0; p--) {
            let particle = this.particlesArray[p];
          
            if (particle.lifetime <= 0) {
              
              particles.splice(p, 1);
            } 
          }
      }

    
}