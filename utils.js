// half filling circle
class HalfCircle {
  constructor(_x, _y, _diam, _sa, _ea, _fm) {
    this.x = _x;
    this.y = _y;
    this.diam = _diam;
    this.sa = _sa;
    this.ea = _ea;
    this.fm = _fm;
  }

  // show this circle
  show() {
    // stroke("#d7b764");
    if (this.fm) {
      fill(col1);
      arc(this.x, this.y, this.diam, this.diam, this.sa, this.ea, CHORD);
      fill(col2);
      arc(this.x, this.y, this.diam, this.diam, this.ea, this.sa, CHORD);
    } else {
      fill(col2);
      arc(this.x, this.y, this.diam, this.diam, this.sa, this.ea, CHORD);
      fill(col1);
      arc(this.x, this.y, this.diam, this.diam, this.ea, this.sa, CHORD);
    }
  }
}
// Modify the colour of the apple by clicking the mouse
function mousePressed() {
  col1 = color(random(255), random(255), random(255));
  col2 = color(random(255), random(255), random(255));
}
// 
function keyPressed() {
  if (key == ' ') {
    move = !move;
  }

}

