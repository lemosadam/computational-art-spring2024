class firework {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.particles = [];

        this.active = false;

        this.boomHeight = random((height/2 - 100), (height / 2 + 100));
        this.size = random(1, 3);
        this.speed = -5;

        this.hue = random(360);
    }

    update() {
        // Move upward until boomHeight, and then activate the particle instantiation
        if (this.pos.y < this.boomHeight) {
            this.active = true;
        } else {
            // Draw the particle system point when it isn't active (to sort of look like a firework)
            // Below is a bunch of me just messing around with position and size.
            //this.pos.x += map(noise((frameCount + this.boomHeight)/50), 0, 1, -2, 2);
            this.pos.y += this.speed;
           
            fill(0, 0, 0, map(this.pos.y, height, this.boomHeight, 1, 0.5));
            noStroke();
            rect(this.pos.x, this.pos.y, this.size);
        }

        // If active, create a particle every time update is called
        if (this.active) {
            this.particles.push(new Particle(this.pos.x, this.pos.y, this.hue));
        }

        // Update and display all the particle system's particles
        for (let particle of this.particles) {
            particle.update();
            particle.show();
        }

        // If the particle's lifetime reached zero, remove it from the system's array
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].destroy) {
                this.particles.splice(i, 1);
            }
        }
    }

    show(){
        push();

        noStroke();
        fill(this.hue);
        rect(this.pos.x, this.pos.y, this.size);

        pop();
    }
}

