class Particle {

    //particle code pulled from my particle project and then tweaked
    constructor(x, y, teamColor) {
        this.pos = createVector(x,y)
        this.vel = createVector(random(-2, 2), random(-1, 1));
        this.acc = createVector(0, 0);
        this.gravity = createVector(0,1)

        if(teamColor == "blue"){
            this.hue = 240
        } else {
            this.hue = 0
        }

        this.mass = random(10, 20);

        this.size = random(6, 10);

        this.lifetime = 50;
        ellipse(x,y, this.size)
     
    }


    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    addDrag() {
        let dragConstant = -0.3;
        let forceDrag = this.vel.mag() * this.vel.mag() * dragConstant;
        let drag = p5.Vector.normalize(this.vel);
        drag.mult(forceDrag);
        this.addForce(drag);
    }

    update(){
        
        this.lifetime--;
        if (this.lifetime <= 0) {
            this.destroy = true;
        }
        
        this.addForce(this.gravity);
        this.addDrag()
        this.vel.add(this.acc); 
        this.vel.limit(5); 
        this.pos.add(this.vel); 

        this.acc.mult(0);
        
    }

    draw() {
        push();

        translate(this.pos.x, this.pos.y);
        
        fill(this.hue, 80, 50);
        circle(0, 0, this.size);

        pop();
    }
}