class Star {
    constructor(x, y, size) {
    colorMode(HSB);
    this.x = x;
	this.y = y;
	this.size = size;
    this.hue = (0, 0, 100);

    }

  show(){
        push();

        noStroke();
        fill(this.hue);
        rect(this.x, this.y, this.size);

        pop();
    }
}
