class shimmerfirework {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.shimmerparticles = [];
        this.lifetime = 500;
        this.active = false;

        this.boomHeight = random(0, height/4);
        this.size = random(1, 3);
        this.speed = random(-1, -3);

        this.hue = color(0, 100, 100);
    }

    update() {
        // Move upward until boomHeight, and then activate the particle instantiation
        if (this.pos.y < this.boomHeight) {
            this.active = true;
            this.speed = 0;
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
                let particleHue = color(0, 100, 100);
                this.shimmerparticles.push(new shimmerparticle(this.pos.x, this.pos.y, particleHue));
            }
            console.log(this.active);
            this.pos.y = height+100;
            this.active=false;
            
            

        }

        if (this.lifetime <= 0) {
               
                this.active = false;
                
            }

        // Update and display all the particle system's particles
        for (let shimmerparticle of this.shimmerparticles) {
            shimmerparticle.update();
            shimmerparticle.show();
        }

        // If the particle's lifetime reached zero, remove it from the system's array
        for (let i = this.shimmerparticles.length - 1; i >= 0; i--) {
            if (this.shimmerparticles[i].destroy) {
                this.shimmerparticles.splice(i, 1);
            }
        }
    }
}// JavaScript source code
