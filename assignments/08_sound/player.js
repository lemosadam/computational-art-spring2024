class player {

    constructor(x, y, size) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
    
      
        this.speed = random(-1, -3);
    
        this.hue = color(0, 0, 100);

        this.mass = 1;

        this.isJumping = false;
        
    }
    

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    update() {
        if (keyIsDown(LEFT_ARROW)) {
            this.pos.x -= 5;
            // Flip horizontally when the left arrow key is pressed
            this.flip = -1;
        } else {
            this.flip = 1; // Reset the flip to default when the left arrow key is released
        }
      
        if (keyIsDown(RIGHT_ARROW)) {
          this.pos.x += 5;
        }

        if(keyIsDown(32) && this.isJumping == false)
        {
            if(this.pos.y = 175){
                jumpSample.play();
                this.isJumping = true;
            this.vel = createVector(0, -100)
            this.pos.add(this.vel)
            
            }
        }
  
        if(this.pos.y <= 175){
            
            this.pos.add(gravity)
        }
        else{
            this.isJumping = false;
        }
        
      }
    
    show(){
        push();
        translate(this.pos.x, this.pos.y);
        scale(.1);
        scale(this.flip, 1);
        if(this.isJumping == true){
            image(jumpIMG, 0, 0)
        }
        else{
            image(marioIMG, 0, 0)
        }
        pop();
    }



    }// JavaScript source code
    