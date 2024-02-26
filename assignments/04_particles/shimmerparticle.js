class shimmerparticle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-2, 2), random(-1, 5));
        this.acc = createVector(0, 0);

        this.hue = color(50, 100, 100);

        this.mass = random(30, 50);

        this.size = random(1, 3);

        this.lifetime = 100;
    }


    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    addWaterDrag() {
        // fDrag = -C * mag(velocity)^2
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

        

        // FORCES
        this.addForce(gravity);

        if (this.pos.y > height/2) {
            this.addWaterDrag();
        }

        // MOVEMENT
        this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
        this.vel.limit(5); // This limits the magnitude of the velocity vector
        this.pos.add(this.vel); // Apply velocity to position

        // Reset the acceleration back to (0,0). This is important because
        // forces need to be continually applied in order to affect velocity.
        // In other words, if we didn't do this, forces would accumulate over
        // multiple calls to update(), which isn't what we want.
        this.acc.mult(0);
    }

    show() {
        push();

        noStroke();

        translate(this.pos.x, this.pos.y);
        imageMode(CENTER);
        // Set fill with lifetime affecting alpha
        fill(this.hue, 50, 100, 0.5 - map(this.lifetime, 0, 100, .5, 0));
        rect(0, 0, this.size);

        pop();
    }
}// JavaScript source code
