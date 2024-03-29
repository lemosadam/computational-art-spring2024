class firework {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.particles = [];
        this.lifetime = 50;
        this.active = false;

        this.boomHeight = random(0, height/2);
        this.size = random(1, 3);
        this.speed = random(-1, -3);

        this.hue = color(random(1, 360), 100, 50);
    }

    update() {
        // Move upward until boomHeight, and then activate the particle instantiation
        if (this.pos.y < this.boomHeight) {
            this.active = true;
        } else {
            // Draw the particle system point when it isn't active (to sort of look like a firework)
            // Below is a bunch of me just messing around with position and size.
            this.pos.x += map(noise((frameCount + this.boomHeight)/50), 0, 1, -2, 2);
            this.pos.y += this.speed;

            fill(this.hue);
            noStroke();
            rect(this.pos.x, this.pos.y, this.size);
        }

        // If active, create a particle every time update is called
        if (this.active) {
            for (let i = 0; i < 100; i++) {
                let particleHue = color(random(1, 360), 100, 100);
                this.particles.push(new Particle(this.pos.x, this.pos.y, particleHue));
            }
            console.log(this.active);
            this.pos.y = height;
            this.active=false;
            this.destroy=true;
            

        }

        if (this.lifetime <= 0) {
               
                this.active = false;
                
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
}