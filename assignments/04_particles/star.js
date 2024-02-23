class Star {
    constructor(x, y, size) {
    colorMode(HSB);
    this.x = x;
	this.y = y;
	this.size = size;
    this.hue = (random(1, 255), random(1, 255), 50);

    }

  show(){
        push();

        noStroke();
        fill((random(1, 255), random(1, 255), 50));
        rect(this.x, this.y, this.size);

        pop();
    }
}
