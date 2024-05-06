class Particle {

    //particle code pulled from my particle project and then tweaked
    constructor(x, y, teamColor) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-2, 2), random(-1, 1));
        this.acc = createVector(0, 0);
        this.gravity = createVector(0,1)

        if(teamColor == "blue"){
            this.fill = 240
        } else {
            this.fill = 0
        }

        this.mass = random(10, 20);

        this.size = random(4, 6);

        this.lifetime = 50;
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

    update() {
        this.lifetime--;
        if (this.lifetime <= 0) {
            this.destroy = true;
        }

        this.addForce(this.gravity);
        this.vel.add(this.acc); 
        this.vel.limit(5); 
        this.pos.add(this.vel); 

        this.acc.mult(0);
        console.log(this.pos)
    }

    draw() {
        push();

        noStroke();

        translate(this.pos.x, this.pos.y);
        imageMode(CENTER);
        fill(this.fill, 80, 50);
        ellipse(0, 0, this.size);

        pop();
    }
}