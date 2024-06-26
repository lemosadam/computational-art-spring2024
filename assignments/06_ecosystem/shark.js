class Shark{ 
    
    constructor(x, y, target, fishies, fishHue) {
    // For more detailed comments on how pos, vel, acc, and addForce work
    // see the Dot example from 2-15-24.

    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);

    this.target = target;
    this.maxSpeed = 2;
    this.maxForce = 0.05;

    this.dim = 0 + random(5);

    this.hue = fishHue;
    this.saturation = 70;
    this.brightness = 80;

    this.range = 200;

    this.mass = 1;

    this.fishies = fishies;

    this.tag = "shark";

    

    //background(255, 20, 100);
}

addForce(force) {
    let forceWithMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceWithMass);
}

seek(t, arrive) {
    // 1. Compute the desired velocity and set it to be maxSpeed
    let desired = p5.Vector.sub(t, this.pos);

    // desired.mult(-1);

    let distance = desired.mag();

    // If the caller passed in true, and we are close to the target, scale our
    // speed based on the distance.
    if (arrive && distance < 100) {
        let speed = map(distance, 0, 100, 0, this.maxSpeed);
        desired.setMag(speed);
    } else {
        desired.setMag(this.maxSpeed);
    }

    // 2. Compute the force by seeing the the change is in velocities
    // to move from the current velocity to the desired velocity and limit
    // its magnitude.
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);

    // 3. Apple this "steering" force. 
    this.addForce(steer);
}

wrap() {
    this.pos.x = (this.pos.x + width) % width;
    this.pos.y = (this.pos.y + height) % height;
}

getCloseVehicles() {
    let closeVehicles = [];
    for (let vehicle of fishies) {
        if (vehicle !== this) {
            if (dist(vehicle.pos.x, vehicle.pos.y, this.pos.x, this.pos.y) < this.range) {
                closeVehicles.push(vehicle);
            }
        }
    }
    return closeVehicles;
}

cohesion(closeVehicles) {
    if (closeVehicles.length > 0) {
        let sumPositions = createVector(0, 0);
        for (let vehicle of closeVehicles) {
            sumPositions.add(vehicle.pos);
        }
        sumPositions.div(closeVehicles.length);

        let desired = p5.Vector.sub(sumPositions, this.pos);
        desired.setMag(this.maxSpeed);
        let steeringForce = p5.Vector.sub(desired, this.vel);
        steeringForce.limit(this.maxForce);
        return steeringForce;
        
    }

    return createVector(0,0);
}

separation(closeVehicles) {
    let sumOfAnglesToVehicles = createVector(0, 0);
    for (let vehicle of closeVehicles) {
        let dirToVehicle = p5.Vector.sub(vehicle.pos, this.pos);
        sumOfAnglesToVehicles.add(dirToVehicle);
    }
    if (closeVehicles.length !== 0) {
        sumOfAnglesToVehicles.div(closeVehicles.length);
    }
    sumOfAnglesToVehicles.setMag(this.maxSpeed);
    sumOfAnglesToVehicles.mult(-1);
    
    // compute steering force
    let steeringForce = p5.Vector.sub(sumOfAnglesToVehicles, this.vel);
    steeringForce.limit(this.maxForce);

    return steeringForce;
}

alignment(closeVehicles) {
    let sumOfVelocities = createVector(0, 0);
    for (let vehicle of closeVehicles) {
        sumOfVelocities.add(vehicle.vel);
    }
    if (closeVehicles.length > 0) {
        sumOfVelocities.div(closeVehicles.length);
    }
    sumOfVelocities.setMag(this.maxSpeed);
    
    // compute steering force
    let steeringForce = p5.Vector.sub(sumOfVelocities, this.vel);
    steeringForce.limit(this.maxForce);

    return steeringForce;
}

update() {
    
    if (mouseIsPressed) {
        let mousePos = createVector(mouseX, mouseY);
        this.seek(mousePos);
    } else {
        let closeVehicles = this.getCloseVehicles();
        // What actions is this agent pursuing?
        let cohesionForce = this.cohesion(closeVehicles);
        cohesionForce.mult(.8);
        this.addForce(cohesionForce);

        let separationForce = this.separation(closeVehicles);
        for (let vehicle of closeVehicles) {
            if (vehicle instanceof Shark && vehicle !== this) {
                
                //console.log("shark detected");
                let separationForce = this.separation([vehicle]);
                this.maxSpeed = 3;
                separationForce.mult(5);
                this.addForce(separationForce);
               
                
            } else {
                this.maxSpeed = 3;
                separationForce.mult(.4);
                this.addForce(separationForce);
                
            }
        }
        //separationForce.mult(.1);
        //this.addForce(separationForce);

        let alignmentForce = this.alignment(closeVehicles);
        let n = noise(frameCount * 0.01);
        //console.log(n);
        alignmentForce.mult(n);
        this.addForce(alignmentForce);
    }

    this.dim = map(this.pos.y, 0, height, 2, 20)

   
    this.wrap();
    // MOVEMENT
    this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel); // Apply velocity to position

    this.acc.set(0,0);
}

show() {
    
    
    push();

    
    translate(this.pos.x, this.pos.y);

    

    fill(0, 0, 10, 0.08);
    noStroke();
    //ellipse(0, 0, this.range);

    // Heading is the amount of rotation
    let angle = this.vel.heading();
    rotate(angle);

    fill(this.hue, this.saturation, 10);

   
    stroke(0, 0, 0)
    strokeWeight(1)
    triangle(0, 0, -40, -40, -40, 40)
    ellipse(0, 0, 50);
    
    
    // beginShape();
    // vertex(this.dim, 0);
    // vertex(-this.dim, this.dim/2);
    // vertex(-this.dim, -this.dim/2);
    // endShape(CLOSE);

    pop();
}
}